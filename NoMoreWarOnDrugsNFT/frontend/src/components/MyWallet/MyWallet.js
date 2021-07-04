import React from "react";
import { MyNFTs } from "./MyNFTs";
import { Balance } from "./Balance";

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
                getNFTData={ (id) => {
                    return this.props.getNFTData(id);
                }}
                getNFTidsByAddress={(address) => {
                    return this.props.getNFTidsByAddress(address);
                }}
                getAllNFTsIdsOnly = { () => {
                    return this.props.getAllNFTsIdsOnly();
                }}
                waitForMinedConfirmation={ (tx_hash, func) => {
                    return this.props.waitForMinedConfirmation(tx_hash, func);
                  }}
                  safeTransfer = { (owner, to, tokenId) => {
                    return this.props.safeTransfer(owner, to, tokenId);
                  }}
            />
            
        </div>
        );
    }
}