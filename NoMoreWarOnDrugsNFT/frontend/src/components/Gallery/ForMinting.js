import React from "react";
import { PaginationForMinting } from "./PaginationForMinting";
import "../../style/gallery.css";



export class ForMinting extends React.Component{

    constructor(props){
        super(props);
        //HERE IS WHERE WE SETUP THE NFTs FOR MINTING
        const Anti_inmigrante = require("../../uris/Anti_inmigrante.json");
        const Anti_immigrant = require("../../uris/Anti_immigrant.json");
        const British_Cartel = require("../../uris/British_Cartel.json");
        const El_Cartel_De_Los_Britanicos = require("../../uris/El_Cartel_De_Los_Britanicos.json");
        const Opium_wars_treaty = require("../../uris/Opium_wars_treaty.json");
        const Tratado_De_Las_Guerras_Del_Opio = require("../../uris/Tratado_De_Las_Guerras_Del_Opio.json");

        const forMint = {"0xF11B2122933D4998617AD2E9A56F9D14645274A00E28DA44C8058A0819AF2273":Anti_immigrant,
                        "0x16E6A777F3E8948F0FD04648CC8FAE1F9A109C59027DDCBF280C5F67BF8C62B3":Anti_inmigrante,
                        "0xA4CC95B428ECB1A037EDCE465831CA458B195E1CA59B5B9ED6B07044C8FB5734":British_Cartel,
                        "0x3F4942B623D7A7CE0F2B7F044A01F864F48D3EA02A718570255A87B8B9819A5E":El_Cartel_De_Los_Britanicos,
                        "0x6677ED724289C6428C4CF5F780E7174B2598AF1AE4092818FEA94F2EEAAB33FE":Opium_wars_treaty,
                        "0xE2C9B32B25AC5C9A85A1B1F702F10F177842CBA7B08F19A134EF6E4ABD094378":Tratado_De_Las_Guerras_Del_Opio
                        };
        this.state = {forMint: forMint};
    }

  

  render(){
    return (
      <div className="gallery">
          <PaginationForMinting
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
          
          getPrice = { (tokenId) => {
            return this.props.getPrice( tokenId);
          }}
          marketPlaceAddress = {this.props.marketPlaceAddress}
          to = {this.props.to}
          />
         
          </div>

        );
    }
}