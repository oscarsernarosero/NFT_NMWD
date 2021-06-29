import React from "react";
import { PaginationNFTs } from "./PaginationNFTs";
import { ForMinting } from "./ForMinting";
import "../../style/gallery.css";

export class Gallery extends React.Component{

  
  render(){
    return (
      <div className="gallery">
          <PaginationNFTs
          marketPlaceAddress = {this.props.marketPlaceAddress}
          address = {this.props.address}
          getNFTData={ (id) => {
              return this.props.getNFTData(id);
          }}
          getNFTidsByAddress={(address) => {
              return this.props.getNFTidsByAddress(address);
          }}
          getAllNFTsIdsOnly = { () => {
              return this.props.getAllNFTsIdsOnly();
          }}
          mywallet = {false}
          />


        <ForMinting
          marketPlaceAddress = {this.props.marketPlaceAddress}
          address = {this.props.address}
          getAllNFTsIdsOnly = { () => {
              return this.props.getAllNFTsIdsOnly();
          }}
          mywallet = {false}
          marketPlaceAddress = {this.props.marketPlaceAddress}
          to = {this.props.to}
          getPrice = { (tokenId) => {
            return this.props.getPrice( tokenId);
          }}
          />
         
          </div>

          

        );
    }
}