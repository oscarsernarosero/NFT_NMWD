// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./utils/owned.sol";
import "./NoMoreWarOnDrugs.sol";
// We import this library to be able to use ////console.log
import "hardhat/console.sol";

contract NMWDMarketPlace is Owned {

    //REVIEW ALL THESE CODES. MIGHT BE VERY WRONG
    string constant INVALID_ADDRESS = "004001";
    string constant CONTRACT_ADDRESS_NOT_SETUP = "004002";
    string constant NOT_APPROVED= "004003";
    string constant NOT_VALID_NFT = "004004";
    string constant NOT_FOR_SALE = "004005";
    string constant NOT_EHOUGH_ETHER = "004006";
    string constant NEGATIVE_VALUE = "004007";
    string constant NO_CHANGES_INTENDED = "004008";
    string constant NOT_NFT_OWNER = "004009";

    event Sent(address indexed payee, uint amount, uint balance);
    event Received(address indexed payer, uint tokenId, uint amount, uint balance);

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
    * @dev user address balance in ETH weis held in the market place.
    */
    mapping(address => uint256) public ethBalance;

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
        console.log("address(NMWDcontract): ",address(NMWDcontract));
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
        require(msg.sender != address(0) && msg.sender != address(this));
        require(msg.value >= price[_tokenId]);
        require(NMWDcontract.ownerOf(_tokenId) != address(0), NOT_VALID_NFT);
        address tokenSeller = NMWDcontract.ownerOf(_tokenId);
        require(NMWDcontract.getApproved(_tokenId) == address(this) || 
                NMWDcontract.isApprovedForAll(tokenSeller, address(this)), 
                NOT_APPROVED);
        NMWDcontract.safeTransferFrom(tokenSeller, msg.sender, _tokenId);
        console.log("ethBalance[tokenSeller]: ",ethBalance[tokenSeller]);
        console.log("contractBalance: ", contractBalance);
        ethBalance[tokenSeller] += (msg.value / 1000) * 998;
        contractBalance += (msg.value / 1000) * 2;
        forSale[_tokenId] = false;
        emit Received(msg.sender, _tokenId, msg.value, address(this).balance);
    }

    /**
    * @dev Purchase _tokenId
    * @param _tokenId uint token ID (painting number)
    */
    function mintThroughPurchase(address _to, uint _tokenId, string memory _uri) external payable  {
        console.log("price[_tokenId] ",price[_tokenId]);
        require(price[_tokenId] != 0);
        require(msg.value >= price[_tokenId],NOT_EHOUGH_ETHER);
        require(msg.sender != address(0) && msg.sender != address(this));
        contractBalance += msg.value;
        NMWDcontract.mint(_to, _tokenId, _uri);
        console.log("msg.value ",msg.value);
        console.log("forSale[_tokenId]  ",forSale[_tokenId] );
        emit Received(_to, _tokenId, msg.value, address(this).balance);
    }

    /**
    * @dev send / withdraw _amount to _payee
    * @param _payee the address where the funds are going to go
    * @param _amount the amount of Ether that will be sent
    */
    function withdrawFromContract(address _payee, uint _amount) public onlyOwner {
        require(_payee != address(0) && _payee != address(this));
        require(_amount > 0 && _amount <= address(this).balance);
        payable(_payee).transfer(_amount);
        emit Sent(_payee, _amount, address(this).balance);
    }   

    /**
    * @dev user's method to withdraw the funds held in the market place.
    * @param _amount the amount of Ether that will be sent
    */
    function withdrawUserFunds(uint _amount) public {
        require(_amount > 0 && _amount <= ethBalance[msg.sender]);
        payable(msg.sender).transfer(_amount);
        emit Sent(msg.sender, _amount, ethBalance[msg.sender]);
        ethBalance[msg.sender] -=  _amount;
   }

    /**
    * @dev Updates price for the _tokenId NFT
    * @dev Throws if _currentPrice is zero
    * @param _price the price in wei for the NFT
    * @param _tokenId uint token ID (painting number)
    */
    function setPrice(uint _price, uint _tokenId) public {
        require(_price > 0, NEGATIVE_VALUE);
        require(_price != price[_tokenId], NO_CHANGES_INTENDED)
        try NMWDcontract.ownerOf(_tokenId) returns (address _address) {
            require(_address == msg.sender);
        }catch {
           require(owner == msg.sender, "Not owner"); 
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
    * @dev get user's balance held in the marketplace (weis)
    * @param userAddress user's address
    */
    function getUserBalance(address userAddress) external view returns (uint256){
        //require(msg.sender == userAddres || msg.sender == owner,"Only user can check this balance.");
        return ethBalance[userAddress];
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
            require(_address == msg.sender,NOT_NFT_OWNER);
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