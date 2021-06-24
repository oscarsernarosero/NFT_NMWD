// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./owned.sol";
import "./NoMoreWarOnDrugs.sol";
import "./context.sol";
import "./address-utils.sol";


contract NMWDMarketPlace is Owned, Context {

    using AddressUtils for address;

    string constant INVALID_ADDRESS = "0501";
    string constant CONTRACT_ADDRESS_NOT_SETUP = "0502";
    string constant NOT_APPROVED= "0503";
    string constant NOT_VALID_NFT = "0504";
    string constant NOT_FOR_SALE = "0505";
    string constant NOT_EHOUGH_ETHER = "0506";
    string constant NEGATIVE_VALUE = "0507";
    string constant NO_CHANGES_INTENDED = "0508";
    string constant NOT_NFT_OWNER = "0509";
    string constant INSUFICIENT_BALANCE = "0510";

    event Sent(address indexed payee, uint amount);
    event RoyaltyPaid(address indexed payee, uint amount);
    event SecurityWithdrawal(address indexed payee, uint amount);
    event NFTSent(address indexed payer, uint tokenId, uint amount);

    NoMoreWarOnDrugs public NMWDcontract;

    /**
    * @dev Mapping from token ID to its pirce.
    */
    mapping(uint => uint256) internal price;

    /**
    * @dev Mapping from NFT ID to boolean representing
    * if it is for sale or not.
    */
    mapping(uint => bool) internal forSale;

    /**
    * @dev contract balance
    */
    uint internal contractBalance;


    /**
    * @dev Contract Constructor
    */
    constructor() { 
        isOwned();
    }

    /**
    * @dev update the address of the NFTs
    * @param nmwdAddress address of NoMoreWarOnDrugs tokens 
    */
    function updateNMWDcontract(address nmwdAddress) external onlyOwner{
        require(nmwdAddress != address(0) && nmwdAddress != address(this),INVALID_ADDRESS);
        NMWDcontract = NoMoreWarOnDrugs(nmwdAddress);
    }

    /**
    * @dev transfers ownership of the NFT contract to the owner of 
    * the marketplace contract. Only if the marketplace owns the NFT
    */
    function getBackOwnership() external onlyOwner{
        require(address(NMWDcontract) != address(0),CONTRACT_ADDRESS_NOT_SETUP);
        NMWDcontract.transferOwnership(address(owner));
    }


    /**
    * @dev Purchase _tokenId
    * @param _tokenId uint token ID (painting number)
    */
    function purchaseToken(uint _tokenId) external payable  {
        require(forSale[_tokenId], NOT_FOR_SALE);
        require(_msgSender() != address(0) && _msgSender() != address(this));
        require(msg.value >= price[_tokenId]);
        require(NMWDcontract.ownerOf(_tokenId) != address(0), NOT_VALID_NFT);

        address tokenSeller = NMWDcontract.ownerOf(_tokenId);
        require(NMWDcontract.getApproved(_tokenId) == address(this) || 
                NMWDcontract.isApprovedForAll(tokenSeller, address(this)), 
                NOT_APPROVED);

        //avoid reentrancy
        forSale[_tokenId] = false;

        //transfer the NFT to the buyer
        NMWDcontract.safeTransferFrom(tokenSeller, _msgSender(), _tokenId);

        // this is the fee of the contract per transaction
        uint256 saleFee = (msg.value / 1000) * 8;
        contractBalance += saleFee;

        //calculating the net amount of the sale
        uint netAmount = msg.value - saleFee;

        (address royaltyReceiver, uint256 royaltyAmount) = NMWDcontract.royaltyInfo( _tokenId, netAmount);

        //calculating the amount to pay the seller 
        uint256 toPaySeller = netAmount - royaltyAmount;

        //paying the seller and the royalty recepient
        payable(tokenSeller).transfer( toPaySeller );
        (bool success, ) =royaltyReceiver.call{value: royaltyAmount, gas: 100000}("");
        require( success, "Paying Royalties failed");
        

        //notifying the blockchain
        emit Sent(tokenSeller, toPaySeller);
        emit RoyaltyPaid(royaltyReceiver, royaltyAmount);
        emit NFTSent(_msgSender(), _tokenId, msg.value);
    }

    /**
    * @dev Purchase _tokenId
    * @param _tokenId uint token ID (painting number)
    */
    function mintThroughPurchase(address _to, uint _tokenId, string memory _uri,
                                address royaltyRecipient, uint256 royaltyValue
                                ) external payable  
             {
        require(price[_tokenId] != 0);
        require(msg.value >= price[_tokenId],NOT_EHOUGH_ETHER);
        require(_msgSender() != address(0) && _msgSender() != address(this));

        contractBalance += msg.value;

        NMWDcontract.mint(_to, _tokenId, _uri, royaltyRecipient, royaltyValue);
        emit NFTSent(_to, _tokenId, msg.value);
    }

    /**
    * @dev send / withdraw _amount to _payee
    * @param _payee the address where the funds are going to go
    * @param _amount the amount of Ether that will be sent
    */
    function withdrawFromContract(address _payee, uint _amount) external onlyOwner {
        require(_payee != address(0) && _payee != address(this));
        require(contractBalance >= _amount, INSUFICIENT_BALANCE);
        require(_amount > 0 && _amount <= address(this).balance, NOT_EHOUGH_ETHER);
        //this is kinda xtra, but security is top priority
        require(tx.origin == _msgSender());

        //we check if somebody has hacked the contract, in which case we send all the funds to 
        //the owner of the contract
        if(contractBalance != address(this).balance){
            contractBalance = 0;
            payable(owner).transfer(address(this).balance);
            emit SecurityWithdrawal(owner, _amount);
        }else{
            contractBalance -= _amount;
            payable(_payee).transfer(_amount);
            emit Sent(_payee, _amount);
        }
    }   

    /**
    * @dev Updates price for the _tokenId NFT
    * @dev Throws if _currentPrice is zero
    * @param _price the price in wei for the NFT
    * @param _tokenId uint token ID (painting number)
    */
    function setPrice(uint _price, uint _tokenId) external {
        require(_price > 0, NEGATIVE_VALUE);
        require(_price != price[_tokenId], NO_CHANGES_INTENDED);
        try NMWDcontract.ownerOf(_tokenId) returns (address _address) {
            require(_address == _msgSender());
        }catch {
           require(owner == _msgSender(), "Not owner"); 
        }
        price[_tokenId] = _price;
    } 

    /**
    * @dev get _tokenId price in wei
    * @param _tokenId uint token ID 
    */
    function getPrice(uint _tokenId) external view returns (uint256){
        return price[_tokenId];
    }    

    /**
    * @dev get marketplace's balance (weis)
    */
    function getMarketPlaceBalance() external view returns (uint256){
        return contractBalance;
    }   

    /**
    * @dev sets the token with _tokenId a boolean representing if it's for sale or not.
    * @param _tokenId uint token ID 
    * @param _forSale is it or not for sale? (true/false)
    */
    function setForSale(uint _tokenId, bool _forSale) external returns (bool){
        
        try NMWDcontract.ownerOf(_tokenId) returns (address _address) {
            require(_address == _msgSender(),NOT_NFT_OWNER);
        }catch {
           return false;
        }
        require(_forSale != forSale[_tokenId],NO_CHANGES_INTENDED);
        forSale[_tokenId] = _forSale;
        return true;
    } 

    /**
    * @dev gets the token with _tokenId forSale variable.
    * @param _tokenId uint token ID 
    */
    function getForSale(uint _tokenId) external view returns (bool){
        return forSale[_tokenId];
    } 

}