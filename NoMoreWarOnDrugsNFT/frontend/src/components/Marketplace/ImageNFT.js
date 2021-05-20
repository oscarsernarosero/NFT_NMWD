import React from "react";
import "../../style/imageNFT.css"

export class ImageNFT extends React.Component{
  
  render(){
  return (
    <div>
      <h4 className="NFTTitle"> {this.props.uri.name} </h4>
      <a href={this.props.uri.image} target="_blank" rel="noopener noreferrer">
      <img 
      src={this.props.uri.image }
      alt={this.props.uri.name}
      className="imageNFT"
      />
      </a>
      <h6 className="description">
        artist: 
        </h6>
        <a href={this.props.uri.attributes[1].webpage} className="link" target="_blank" rel="noopener noreferrer">
        {this.props.uri.attributes[0].artist}
        </a>
        <h3 className="price">Price: ${parseInt(this.props.uri.price)/1000000000000000000} ETH</h3>
        <div className="text-center">
        <button onClick="" className="button">BUY</button>
        </div>
    </div>
  );
}
}
