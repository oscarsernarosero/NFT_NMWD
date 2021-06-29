import React from "react";
import "../../style/imageNFT.css";
import { ChangePrice } from "../MyWallet/ChangePrice";
import { ethers } from "ethers";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";


export class ImageNFT extends React.Component{

  constructor(props){
    super(props);
    this.state ={forSale : this.props.uri.forSale, visible:false};
    this.setForSale = this.setForSale.bind(this);
    this.buy = this.buy.bind(this);
    this.mint = this.mint.bind(this);
    this.setSelectedId = this.setSelectedId.bind(this);
    this.buyDisable = this.buyDisable.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.close = this.close.bind(this);
    console.log("state in NFTImage: ",this.state);
    
  }

  buyDisable(){
    console.log("buy button disable");
  }

  close(){
    this.setState({visible:false});
  }

  changePrice(){
    this.setState({visible:true});
  }

  setSelectedId(){
    const CID = (this.props.uri.image).substring(7);
    console.log("CID: ",CID);
    const pinata_image_url = "https://gateway.pinata.cloud/ipfs/"+CID;
      this.props.setSelectedId(this.props.uri.id,pinata_image_url, this.props.uri.price);
    }
  
    async mint() {
      const tokenId = this.props.uri.id;
      const price = this.props.uri.price;
      const royalties = this.props.uri.royalties;
      const royaltyRecepient = royalties.address;
      const royaltyValue = parseFloat(royalties.pctValue)*100;


      const abi = [
        "function mintThroughPurchase(address _to, uint _tokenId, address royaltyRecipient, uint256 royaltyValue) external payable"
      ];
      const iface = new ethers.utils.Interface(abi);
      const data = iface.encodeFunctionData("mintThroughPurchase", [this.props.to, tokenId, royaltyRecepient, royaltyValue]);
        
        const params = [
          {
            from: this.props.to,
            to: this.props.marketPlaceAddress,
            value: price, 
            data: data
          },
        ];
        await window.ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {
            console.log(result);
            this.idInput.current.value = "";
            this.royaltyRecepientInput.value = "";
            this.royaltyValueInput.value = "";
            // The result varies by by RPC method.
            // For example, this method will return a transaction hash hexadecimal string on success.
          })
          .catch((error) => {
            console.log(error);
            // If the request fails, the Promise will reject with an error.
          });
        
    }

  async buy() {
    const tokenId = this.props.uri.id;
    console.log("id: ",tokenId);
    const price = this.props.uri.price;
    console.log("price: ",price);

    const abi = [
    "function purchaseToken(uint _tokenId) external payable"
    ];
    const iface = new ethers.utils.Interface(abi);
    const data = iface.encodeFunctionData("purchaseToken", [tokenId]);
    
    const params = [
        {
        from: this.props.address,
        to: this.props.marketPlaceAddress,
        value: price, 
        data: data
        },
    ];
    console.log("params:",params);
    await window.ethereum
        .request({
        method: 'eth_sendTransaction',
        params,
        })
        .then((result) => {
        console.log(result);
        //this.idInput.current.value = "";
        // The result varies by by RPC method.
        // For example, this method will return a transaction hash hexadecimal string on success.
        })
        .catch((error) => {
        console.log(error);
        // If the request fails, the Promise will reject with an error.
        });
    
  
  }

async setForSale()
{
  this.props.setForSale(this.props.uri.id, !this.state.forSale)
  .then((tx)=> {
    if (tx.error){
    this.setState({forSale: !this.state.forSale});
  }else{
    this.setState({txHash: tx.hash});
    console.log("changed forSale in tx: ",tx.hash);
    window.location.reload(false);
    }
  });
  
}
  
  render(){
    const CID = (this.props.uri.image).substring(7);
    console.log("CID: ",CID);
    const pinata_image_url = "https://gateway.pinata.cloud/ipfs/"+CID;
  return (
    <div>
      <div className="NFTTitle">
        {this.props.uri.name}
      </div>
      <div className="imageContainer">
        <a href={pinata_image_url} target="_blank" rel="noopener noreferrer">
         <img 
          src={pinata_image_url}
          alt={this.props.uri.name}
          className="imageNFT"
          />
        </a>
      </div>
      <div className={this.props.mywallet&&this.props.uri.message==="" ? "dont-show" : "msg-title"}>
        Message:
      </div>
      <div className={this.props.mywallet&&this.props.uri.message==="" ? "dont-show" : 
      !this.props.mywallet&&this.props.uri.message==="" ? "no-message" : "message"}>
        {!this.props.mywallet&&this.props.uri.message==="" ? 
        "This NFT has no message yet. You can set it yourself if you buy this NFT!" :
        this.props.uri.message} 
      </div>
      <div>
        <h6 className="artist">
         artist: 
        </h6>
        <a href={this.props.uri.attributes.webpage} className="link" target="_blank" rel="noopener noreferrer">
          {this.props.uri.attributes.artist}
        </a>
      </div>
      <div className="description">
        Description: {this.props.uri.description}
      </div>
      
      <div className="price">
        Price: {parseInt(this.props.uri.price)/1000000000000000000} ETH
      </div>  
      <div className={this.props.mywallet ? "dont-show" : "text-center"}>

        <button onClick={this.props.mywallet||!this.props.uri.forSale ? this.buyDisable :
                                                   this.props.forMint ? this.mint : this.buy}

        className={this.props.uri.owned ? "button-owned"  : "button" }>
          {this.props.uri.owned ? "You Own This NFT !" : 
          this.props.forMint ? "MINT!" :
          this.props.uri.forSale ? "BUY" : "Not For Sale"}

        </button>
      </div>
      <div className={!this.props.mywallet||this.props.uri.message!=="" ? "dont-show" : "text-center"}>
      {/* the following line is just for testing puroposes. DELETE THIS LINE LATER AND UNCOMMENT THE ONE ABOVE*/ }
      {/* <div className="text-center">  */}
      <Link to={{ pathname: "/setmessage" }}>
        <button className="setMessage" onClick={this.setSelectedId}> Set The Message!</button>
      </Link>
      
      </div>  
      <div className={!this.props.mywallet ? "dont-show" : "text-center"}>
      
        <button className="setPrice" onClick={this.changePrice}> Change Price </button>
        <ChangePrice 
          id = {this.props.uri.id}
          price = {this.props.uri.price}
          visible = {this.state.visible}
          close = {()=>{this.close()}}
          setPrice = { (price, tokenId) => {
            return this.props.setPrice(price, tokenId);
          }}
          waitForMinedConfirmation={ (tx_hash, func) => {
            return this.props.waitForMinedConfirmation(tx_hash, func);
          }}
        />
      </div>  
      <div className={!this.props.mywallet ? "dont-show" : "text-center"}>
      For sale? 
        <label class="switch">
          <input type="checkbox" checked={this.props.uri.forSale} onChange={this.setForSale}/>
          <span className="slider round"></span>
        </label>
      </div>  
    </div>
  );
}
}
