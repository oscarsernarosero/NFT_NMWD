import React from "react";
import { MyNFTs } from "./MyNFTs";
//import "../../style/gallery.css";

export class MyWallet extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
    }

  
  
  render(){
    return (
        <div >
            <MyNFTs 
                getNFTsByAddress = {(address) => {
                    return this.props.getNFTsByAddress(address);
                }}
                address = {this.props.address}
                setTokenMessage={ (_tokenId, _msg ) => {
                    return this.props.setTokenMessage(_tokenId, _msg );
                  }}
                setForSale = { (tokenId, forSale) => {
                    return this.props.setForSale(tokenId, forSale);
                  }}
                setSelectedId = {(id, imageUrl, price) => {
                    return this.props.setSelectedId(id, imageUrl, price);
                }}
                setPrice = { (price, tokenId) => {
                    return this.props.setPrice(price, tokenId);
                  }}
            />
        </div>
        );
    }
}