import React from "react";
import "../../style/imageNFT.css";
import { ChangePrice } from "../MyWallet/ChangePrice";
import { ethers } from "ethers";
import { Popup } from "../Generics/Popup";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";


export class ImageNFT extends React.Component{

  constructor(props){
    super(props);
    
    this.state ={forSale : this.props.uri.forSale, changePriceVisble:false, 
      setForSalePopupVisible: false, waiting:false, successful:false};
    this.setForSale = this.setForSale.bind(this);
    this.buy = this.buy.bind(this);
    this.mint = this.mint.bind(this);
    this.setSelectedId = this.setSelectedId.bind(this);
    this.buyDisable = this.buyDisable.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.closeChangePrice = this.closeChangePrice.bind(this);
    this.closeSetForSalePopup = this.closeSetForSalePopup.bind(this);
    console.log("props NFT image: ",this.props);
  }

  buyDisable(){
    console.log("buy button disable");
  }

  closeChangePrice(){
    this.setState({changePriceVisble:false});
  }

  changePrice(){
    this.setState({changePriceVisble:true});
  }

  closeSetForSalePopup(){
    this.setState({setForSalePopupVisible:false});
  }

  componentDidMount(){
    console.log("this.props.uri.forSale",this.props.uri.forSale);
    this.setState({forSale:this.props.uri.forSale});
  }

  setSelectedId(){
    const CID = (this.props.uri.image).substring(7);
    console.log("CID: ",CID);
    const pinata_image_url = "https://gateway.pinata.cloud/ipfs/"+CID;
      this.props.setSelectedId(this.props.uri.id,pinata_image_url, this.props.uri.price);
    }
  
    async mint() {
      console.log("minting...",this.props.uri.id);
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
    console.log(this.props.forMint);
    console.log(this.props.marketPlaceAddress);
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
  console.log("in setForSale. forsale?: ",this.state.forSale);
  this.setState({setForSalePopupVisible: true});
  console.log("about to send tx");
  const tx = await this.props.setForSale(this.props.uri.id, !this.props.uri.forSale);
  this.setState({waiting: true});
  
  if (tx.error){
    this.setState({forSale: !this.state.forSale});
    this.setState({txHash: tx});
    this.setState({waiting: false});
  }else{
    this.setState({forSale: !this.state.forSale});
    this.setState({txHash: tx.hash});
    const res = await this.props.waitForMinedConfirmation(tx.hash, (tx) => {
      this.setState({waiting: false});
      this.setState({successful: true});
      console.log("tx mined: ", tx.hash);
  })
    console.log("changed forSale in tx: ",tx.hash);
    //this.setState({setForSalePopupVisible: true});
    //window.location.reload(false);
    }
  
  
}
  
  render(){
    const CID = (this.props.uri.image).substring(7);
    let pinata_image_url;
    if(CID){
      pinata_image_url = "https://gateway.pinata.cloud/ipfs/"+CID;
    }else{
      pinata_image_url = "https://gateway.pinata.cloud/ipfs/QmNZxE7QumQqD4WkvPBps7yfwW876Ns55dCf6tCbcFvF5a";//change this for logo later
    }
    
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
          visible = {this.state.changePriceVisble}
          close = {()=>{this.closeChangePrice()}}
          setPrice = { (price, tokenId) => {
            return this.props.setPrice(price, tokenId);
          }}
          waitForMinedConfirmation={ (tx_hash, func) => {
            return this.props.waitForMinedConfirmation(tx_hash, func);
          }}
        />
      </div>  
      <div className={!this.props.mywallet ? "dont-show" : "for-sale-container"}>
        <div className="for-sale-label">
      For sale? 
      </div>
      <div>
        <label className="check-for-sale">
          <input type="checkbox" checked={this.props.uri.forSale} onChange={this.setForSale}/>
          <span ></span>
        </label>
        </div>
      </div>  

          <Popup 
            visible = {this.state.setForSalePopupVisible}
            txHash={this.state.txHash}
            waiting={this.state.waiting}
            successful = {this.state.successful}
            close = {()=>{this.closeSetForSalePopup()}}
          />


    </div>
  );
}
}
