import React from "react";
import { PaginationForMinting } from "./PaginationForMinting";
import "../../style/gallery.css";
const fs = require("fs");


export class ForMinting extends React.Component{

    constructor(props){
        super(props);
        //HERE IS WHERE WE SETUP THE NFTs FOR MINTING
        const files = require("../../localDB/uri_files.json");
        let forMint = {};

        Object.entries(files).map( ([key,value],index) => {
          
            const uri = require("../../uris/"+value+".json");
            forMint[key]=uri;
          });

        this.state = {nftsForMint: forMint, mounted:false};
    }

    componentDidMount(){
      this.setState({mounted:true});
    }

  

  render(){

    if(this.state.mounted){
      console.log("rendering from ForMinting");
      return (
        <div className="gallery">
            <PaginationForMinting
            marketPlaceAddress = {this.props.marketPlaceAddress}
            address = {this.props.address}
            getNFTData={ (id) => {
                return this.props.getNFTData(id);
            }}
            nftsForMint={this.state.nftsForMint}
            getAllNFTsIdsOnly = { () => {
                return this.props.getAllNFTsIdsOnly();
            }}
            mywallet = {false}
            
            getPrice = { (tokenId) => {
              return this.props.getPrice( tokenId);
            }}
            marketPlaceAddress = {this.props.marketPlaceAddress}
            to = {this.props.to}
            />
           
            </div>
  
          );
    }else{
      return <div></div>
    }
    
    }
}