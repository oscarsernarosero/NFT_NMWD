import React from "react";
import "../../style/imageNFT.css";
import { ChangePrice } from "../MyWallet/ChangePrice";
import { ethers } from "ethers";
import { Popup } from "../Generics/Popup";
import { Transfer } from "../MyWallet/Transfer"
import { FaEthereum } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { GiPalette } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { IoPricetag } from "react-icons/io5"; 
import { GiQueenCrown } from "react-icons/gi";
import { HiCash } from "react-icons/hi";
import { TiStar } from "react-icons/ti";

import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';

import {
  Link,
 useHistory
} from "react-router-dom";


export class ImageNFT extends React.Component{

  constructor(props){
    super(props);
   
    
    this.state ={forSale : this.props.uri.forSale, content: undefined, changePriceVisble:false, 
      popupVisible: false, waiting:false, successful:false, transferVisble:false};
    this.setForSale = this.setForSale.bind(this);
    this.buy = this.buy.bind(this);
    this.mint = this.mint.bind(this);
    this.setSelectedId = this.setSelectedId.bind(this);
    this.buyDisable = this.buyDisable.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.closeChangePrice = this.closeChangePrice.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.closeTransfer = this.closeTransfer.bind(this);
    this.transfer = this.transfer.bind(this);
    //this didn't work
    this.reloadWallet = this.reloadWallet.bind(this);
    //console.log("props NFT image: ",this.props);
    
  }

  //this didn't work
  reloadWallet(){
      const history = useHistory();
     history.push('/wallet');
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

  transfer(){
    this.setState({transferVisble:true});
  }

  closePopup(){
    this.setState({popupVisible:false});
  }

  closeTransfer(){
    this.setState({transferVisble:false});
  }

  async componentDidMount(){
    console.log("this.props.uri.forSale",this.props.uri.forSale);
    this.setState({forSale:this.props.uri.forSale});
  }

  setSelectedId(){
    const CID = (this.props.uri.image).substring(7);
    console.log("CID: ",CID);
    const pinata_content_url = "https://ipfs.fleek.co/ipfs/"+CID;
      this.props.setSelectedId(this.props.uri.id,pinata_content_url, this.props.uri.price);
    }
  
    async mint() {
      console.log("minting...",this.props.uri.id);
      const tokenId = this.props.uri.id;
      const price = this.props.uri.price;
      //const royalties = this.props.uri.royalties;
      //const royaltyRecepient = royalties.address;
      //const royaltyValue = parseFloat(royalties.pctValue)*100;


      const abi = [
        "function mintThroughPurchase(address _to, uint _tokenId) external payable"
      ];
      const iface = new ethers.utils.Interface(abi);
      const data = iface.encodeFunctionData("mintThroughPurchase", [this.props.to, tokenId]);
        
        const params = [
          {
            from: this.props.to,
            to: this.props.marketPlaceAddress,
            value: price, 
            data: data
          },
        ];
        this.setState({popupVisible: true});
        console.log("about to send tx");
        await window.ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then(async (txHash) => {
            this.setState({waiting: true});
            console.log(txHash);
            this.setState({txHash: txHash});
            await this.props.waitForMinedConfirmation(txHash, (tx) => {
              this.setState({waiting: false});
              this.setState({successful: true});
              console.log("tx mined: ", tx);
              const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
               const currentUrl = window.location.href;
              sleep(2000).then( () => window.location.href = currentUrl).catch( error => console.log("error while reloading:",error));
    
          });
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
    this.setState({popupVisible: true});
    console.log("about to send tx");
    await window.ethereum
        .request({
        method: 'eth_sendTransaction',
        params,
        })
        .then(async (txHash) => {
        this.setState({waiting: true});
        console.log(txHash);
        this.setState({txHash: txHash});
        await this.props.waitForMinedConfirmation(txHash, (tx) => {
          this.setState({waiting: false});
          this.setState({successful: true});
          console.log("tx mined: ", tx);
          const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
          const currentUrl = window.location.href;
          sleep(2000).then( () => window.location.href = currentUrl).catch( error => console.log("error while reloading:",error));
    
      });
    })
        .catch((error) => {
        console.log(error);
        // If the request fails, the Promise will reject with an error.
        });
    
  
  }

async setForSale()
{
  console.log("in setForSale. forsale?: ",this.state.forSale);
  this.setState({popupVisible: true});
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
    await this.props.waitForMinedConfirmation(tx.hash, (tx) => {
      this.setState({waiting: false});
      this.setState({successful: true});
      console.log("tx mined: ", tx.hash);
      console.log("changed forSale in tx: ",tx.hash);
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
      const currentUrl = window.location.href;
      sleep(2000).then( () => window.location.href = currentUrl).catch( error => console.log("error while reloading:",error));
    

  })
    
    }
  
  
}
  
  render(){
    
    let CID="";
    let pinata_content_url;
    let animation=false;
    if (this.props.uri.animation_url!==undefined && this.props.uri.animation_url!==""){
      animation=true;
      CID = (this.props.uri.animation_url).substring(7);
    }else{
      CID = (this.props.uri.image).substring(7);
    }
    if(CID){
      pinata_content_url = "https://ipfs.fleek.co/ipfs/"+CID;
    }else{
      if (animation){
        pinata_content_url = "https://ipfs.fleek.co/ipfs/bafybeihj7gwt5cqj2pk35qkdthyt5dmvknstf2k4fqsrwgmpchd7ucypni";//change this for logo later
  
      }else{
        pinata_content_url = "https://ipfs.fleek.co/ipfs/QmNZxE7QumQqD4WkvPBps7yfwW876Ns55dCf6tCbcFvF5a";//change this for logo later
      }
    }

        const currentUrl = window.location.href;
        let i = -1;
        if (this.props.forMint){
          i = currentUrl.lastIndexOf('mint/');
        }else{
          i = currentUrl.lastIndexOf('gallery/');
        }
        
        const url=currentUrl.substr(0,i)+"nftbyid/"+this.props.uri.id;
        console.log(url)
        //window.location.href = url;
    
  return (
    <div className="nft-container">

      <div className="NFTTitle" 
      //style={this.props.uri.name.length<25?{"fontSize":"1.5rem"}:{"fontSize":"1rem"}}
      >
        {this.props.uri.name}
      </div>

      <div className="imageContainer">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {animation? 
            <video loop controls muted playsinline autoPlay
              style={{width:"94%",height:"min-content"}}
              >
              <source src={pinata_content_url} type="video/mp4"/>
              <source src={pinata_content_url} type="video/ogg" />
              <source src={pinata_content_url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            :
            <img 
              src={pinata_content_url}
              alt={this.props.uri.name}
              className="imageNFT"
            />
          }
         
        </a>
      </div>

      <div className="nft-id">
          id: {this.props.uri.id}
      </div>

      <div className={this.props.mywallet&&this.props.uri.message==="" ? "dont-show" : "msg-title"}>
        <MdMessage style={{verticalAlign:"middle"}}/> {<Translate value='imageNFT.message'/>}:
      </div>

      <div className={this.props.mywallet&&this.props.uri.message==="" ? "dont-show" : 
        (!this.props.mywallet&&this.props.uri.message==="") || this.props.uri.message===undefined ? "no-message" : "message"}>
          {(!this.props.mywallet&&this.props.uri.message==="") || this.props.uri.message===undefined  ? 
          <Translate value='imageNFT.noMessage'/> :
          this.props.uri.message} 
      </div>

      <div className="artist-royalty-container">
        <div className="artist-container">
          <div className="artist">
            <GiPalette />&nbsp;{<Translate value='imageNFT.artist'/>}: 
          </div>
          <a href={this.props.uri.attributes.webpage} className="link" 
          style={window.innerWidth>900?{fontSize:"0.9vw"}:{fontSize:"2.2vw"}}
          target="_blank" rel="noopener noreferrer">
            {this.props.uri.attributes.artist}
          </a>
        </div>
        <div className="royalty-container">
          <div className="royalty">
            <GiQueenCrown style={{verticalAlign:"middle"}}/>&nbsp;NFT-Royalty: 
             </div>
          <div className="royalty-value"> 6.00%  </div>
        </div>
      </div>

      <div className="description">
      {<Translate value='imageNFT.description'/>}: {this.props.uri.description}
      </div>
      
      <div className="price" style={window.innerWidth>900?{fontSize:"2.5vw"}:{fontSize:"5.5vw"}}>
       <FaEthereum style={window.innerWidth>900?{verticalAlign:"middle",fontSize:"2.5vw"}:{verticalAlign:"middle",fontSize:"5.5vw"}}/>{parseInt(this.props.uri.price)/1000000000000000000} ETH 
      </div>  

      <div className={this.props.mywallet ? "dont-show" : "button-container"}>

        <button onClick={this.props.mywallet||!this.props.uri.forSale || this.props.provider_defaulted ? this.buyDisable :
                                                   this.props.forMint ? this.mint : this.buy}
          className={this.props.uri.owned ? "button-owned"  : "button" }
          style={window.innerWidth>900?{fontSize:"1.7vw"}:{fontSize:"4vw"}}
          >
          {
            this.props.forMint ? <GiTwoCoins style={{verticalAlign:"middle"}}/> :
            this.props.uri.forSale?  <TiStar style={{verticalAlign:"middle"}}/>  :
            ""
          }
          
          
          {this.props.uri.owned ? <Translate value='imageNFT.youOwn'/> :
            this.props.provider_defaulted ? <Translate value='imageNFT.connectWallet'/> :
              this.props.forMint ?  <Translate value='imageNFT.mint'/>:
                this.props.uri.forSale ? <Translate value='imageNFT.buy'/> : <Translate value='imageNFT.notForSale'/>}

        </button>
      </div>

      <div className={!this.props.mywallet||this.props.uri.message!=="" ? "dont-show" : "text-center"}>
        <Link to={{ pathname: "/setmessage" }}>
          <button className="setMessage" onClick={this.setSelectedId}>
          <MdMessage style={{verticalAlign:"middle"}}/>{<Translate value='imageNFT.setMessage'/>}</button>
        </Link>
        
      </div>  

      <div className={!this.props.mywallet ? "dont-show" : "text-center"}>
    
        <button className="setPrice" onClick={this.changePrice}> 
        <HiCash style={{verticalAlign:"middle"}}/>&nbsp; {<Translate value='imageNFT.changePrice'/>}</button>
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
      <div className={!this.props.mywallet ? "dont-show" : "forsale-transfer-container"}>
        <div className="for-sale-container"> 
          <div className="for-sale-label">
            <IoPricetag style={{verticalAlign:"middle"}}/>&nbsp;{<Translate value='imageNFT.forSale'/>}
            </div>
          <div className="check-for-sale">
              <label >
                <input type="checkbox" checked={this.props.uri.forSale} onChange={this.setForSale}/>
                <span ></span>
              </label>
            </div>
        </div> 
        <div className="transfer-container">

          <button className="transfer-button" onClick={this.transfer}> 
          <IoIosSend style={{verticalAlign:"middle"}}/>&nbsp;{<Translate value='imageNFT.transfer'/>}</button>
          <Transfer 
            my_address={this.props.address}
            safeTransfer = {(owner, to, tokenId) => {
            return this.props.safeTransfer(owner, to, tokenId)}}
            id = {this.props.uri.id}
            price = {this.props.uri.price}
            visible = {this.state.transferVisble}
            close = {()=>{this.closeTransfer()}}
            waitForMinedConfirmation={ (tx_hash, func) => {
              return this.props.waitForMinedConfirmation(tx_hash, func);
            }}
          />
          
        </div> 
      </div>

          <Popup 
            visible = {this.state.popupVisible}
            txHash={this.state.txHash}
            waiting={this.state.waiting}
            successful = {this.state.successful}
            close = {()=>{this.closePopup()}}
          />


    </div>
  );
}
}
