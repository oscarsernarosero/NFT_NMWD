// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;


import "./tokens/nf-token-enumerable.sol";
import "./tokens/nf-token-metadata.sol";
import "./utils/address-utils.sol";
import "./utils/address-utils.sol";
import "./utils/owned.sol";

contract NoMoreWarOnDrugs is NFTokenEnumerable, NFTokenMetadata, Owned {

    /** 
    * @dev The error code for when an NFT is attempted to be minted after the max
    * supply of NFTs has been already reached.
    */
    string constant MAX_TOKENS_MINTED = "20001";

    /** 
    * @dev The maximum amount of NFTs that can be minted in this collection
    */
    uint8 constant MAX_TOKENS = 222;

    /** 
    * @dev Equals to `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
    * which can be also obtained as `IERC721Receiver(0).onERC721Received.selector`
    */
    bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;

    /**
    * @dev Mapping from NFT ID to alias.
    */
    mapping (uint256 => string) private idToOwnerAlias;

    /**
    * @dev Mapping from NFT ID to message.
    */
    mapping (uint256 => string) private idToMsg;

    constructor(string memory _name, string memory _symbol){
        isOwned();
        nftName = _name;
        nftSymbol = _symbol;
    }

    /**
    * @dev Mints a new NFT.
    * @param _to The address that will own the minted NFT.
    * @param _tokenId of the NFT to be minted by the msg.sender.
    */
    function _mint( address _to, uint256 _tokenId ) internal override (NFTokenEnumerable, NFToken){
        require( tokens.length < (MAX_TOKENS-1) , MAX_TOKENS_MINTED );
        super._mint(_to, _tokenId);
        
    }

    function mint(address _to, uint256 _tokenId, 
    string memory _uri
    ,  string memory _alias,  string memory _msg
    ) 
    public onlyOwner {
        _mint(_to, _tokenId);
        idToUri[_tokenId] = _uri;
        idToOwnerAlias[_tokenId] = _alias;
        idToMsg[_tokenId] = _msg;
    }

    /**
   * @dev Assignes a new NFT to an address.
   * @notice Use and override this function with caution. Wrong usage can have serious consequences.
   * @param _to Address to wich we want to add the NFT.
   * @param _tokenId Which NFT we want to add.
   */
  function _addNFToken(  address _to, uint256 _tokenId ) internal override  (NFTokenEnumerable, NFToken){
    super._addNFToken(_to, _tokenId);
  }

  function addNFToken(address _to, uint256 _tokenId) public onlyOwner {
        _addNFToken(_to, _tokenId);
    }

    /**
   * @dev Burns a NFT.
   * @notice This is an internal function which should be called from user-implemented external
   * burn function. Its purpose is to show and properly initialize data structures when using this
   * implementation. Also, note that this burn implementation allows the minter to re-mint a burned
   * NFT.
   * @param _tokenId ID of the NFT to be burned.
   */
  function _burn( uint256 _tokenId ) internal override (NFTokenEnumerable, NFTokenMetadata) {
    super._burn(_tokenId);
  }

  function burn(uint256 _tokenId ) public onlyOwner {
      _burn( _tokenId);
  }

  /**
   * @dev Helper function that gets NFT count of owner. This is needed for overriding in enumerable
   * extension to remove double storage(gas optimization) of owner nft count.
   * @param _owner Address for whom to query the count.
   * @return Number of _owner NFTs.
   */
  function _getOwnerNFTCount(  address _owner  ) internal override(NFTokenEnumerable, NFToken) view returns (uint256) {
    return super._getOwnerNFTCount(_owner);
  }

  function getOwnerNFTCount(  address _owner  ) public view returns (uint256) {
    return _getOwnerNFTCount(_owner);
  }

/**
   * @dev Removes a NFT from an address.
   * @notice Use and override this function with caution. Wrong usage can have serious consequences.
   * @param _from Address from wich we want to remove the NFT.
   * @param _tokenId Which NFT we want to remove.
   */
  function _removeNFToken(
    address _from,
    uint256 _tokenId
  )
    internal
    override (NFTokenEnumerable, NFToken) 
  {
      super._removeNFToken(_from, _tokenId);
  }

  function removeNFToken(address _from, uint256 _tokenId) public onlyOwner {
      _removeNFToken(_from, _tokenId);
  }

  /**
   * @dev A custom alias for the owner of the NFT given by 
   * the first buyer.
   * @param _tokenId Id for which we want the owner alias.
   * @return URI of _tokenId.
   */
  function tokenOwnerAlias(
    uint256 _tokenId
  )
    external
    view
    validNFToken(_tokenId)
    returns (string memory)
  {
    return idToOwnerAlias[_tokenId];
  }

  /**
   * @dev A custom message given for the first NFT buyer.
   * @param _tokenId Id for which we want the message.
   * @return URI of _tokenId.
   */
  function tokenMessage(
    uint256 _tokenId
  )
    external
    view
    validNFToken(_tokenId)
    returns (string memory)
  {
    return idToMsg[_tokenId];
  }

}


