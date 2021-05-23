import React from "react";
import "../../style/imageNFT.css"

export class ImageNFT extends React.Component{

  constructor(props){
    super(props);
    this.state ={forSale : this.props.uri.forSale};
    this.setForSale = this.setForSale.bind(this);
    console.log("state in NFTImage: ",this.state);
    
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
  return (
    <div>
      <div className="NFTTitle">
        {this.props.uri.name}
      </div>
      <div className="imageContainer">
        <a href={this.props.uri.image} target="_blank" rel="noopener noreferrer">
         <img 
          src={this.props.uri.image }
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
        <a href={this.props.uri.attributes[1].webpage} className="link" target="_blank" rel="noopener noreferrer">
          {this.props.uri.attributes[0].artist}
        </a>
      </div>
      <div className="description">
        Description: {this.props.uri.description}
      </div>
      
      <div className="price">
        Price: ${parseInt(this.props.uri.price)/1000000000000000000} ETH
      </div>  
      <div className={this.props.mywallet ? "dont-show" : "text-center"}>
        <button onClick="" className={this.props.uri.owned ? "button-owned"  : "button" }>
          {this.props.uri.owned ? "You Own This NFT !" : "BUY"}
          </button>
      </div>
      <div className={!this.props.mywallet||this.props.uri.message!=="" ? "dont-show" : "text-center"}>
        <button className="setMessage"> Set The Message!</button>
      </div>  
      <div className={!this.props.mywallet ? "dont-show" : "text-center"}>
        <button className="setPrice"> $ Change Price $</button>
      </div>  
      <div className={!this.props.mywallet ? "dont-show" : "text-center"}>
      For sale? 
        <label class="switch">
          <input type="checkbox" checked={this.props.uri.forSale} onChange={this.setForSale}/>
          <span class="slider round"></span>
        </label>
      </div>  
    </div>
  );
}
}
