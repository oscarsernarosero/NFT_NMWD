import React from "react";
//import { ImageNFT } from "./ImageNFT";
import { PaginationNFTs } from "./PaginationNFTs"
import "../../style/gallery.css";

export class Gallery extends React.Component{

  
  render(){
    return (
      <div className="gallery">
          <PaginationNFTs
            
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
          </div>
        );
    }
}