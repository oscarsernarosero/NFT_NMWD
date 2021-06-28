import React from "react";
import { PaginationForMint } from "./PaginationForMint";
import "../../style/gallery.css";



export class ForMinting extends React.Component{

    constructor(props){
        super(props);
        //HERE IS WHERE WE SETUP THE NFTs FOR MINTING
        const Anti_inmigrante = require("../../../../uris/Anti_inmigrante.json");
        const Anti_immigrant = require("../../../../uris/Anti_immigrant.json");
        const Tio_Sam = require("../../../../uris/Tío_Sam.json");
        const Uncle_Sam = require("../../../../uris/Uncle_Sam.json");

        const forMint = {"0x3EB1B5C0B7205E17013B0FB38A71058267F5DB7FD9A3D07E250F0DD07D28F022":Anti_immigrant,
                        "0xA01F734EB6638C845F7EB0DFEFD971A36612DB9016C7345C3DBFD6FD66C34881":Anti_inmigrante,
                        "0x7F5419726D97C56604BD6462ED278D0C920DC9DB3B2CB925245599E7D91A5AB4":Uncle_Sam,
                        "0xB0E5215B50066CE94424B087A7A9F7BA0F3D9F339F8EB462F98CF7D514DBE33F":Tio_Sam
                        };
        this.state = {forMint: forMint};
    }

  

  render(){
    return (
      <div className="gallery">
          <PaginationForMint
          marketPlaceAddress = {this.props.marketPlaceAddress}
          address = {this.props.address}
          getNFTData={ (id) => {
              return this.props.getNFTData(id);
          }}
          forMint={this.state.forMint}
          getAllNFTsIdsOnly = { () => {
              return this.props.getAllNFTsIdsOnly();
          }}
          mywallet = {false}
          />
         
          </div>

        );
    }
}