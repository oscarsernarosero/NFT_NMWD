import React from "react";

export class ImageNFT extends React.Component{
  
  render(){
  return (
    <div>
      <h4>{this.props.uri.name} </h4>
      <img 
      src={this.props.uri.image}
      alt={this.props.uri.name}
      />
      <h7>artist: {this.props.uri.attributes[0].artist}: {this.props.uri.attributes[1].webpage}</h7>
    </div>
  );
}
}
