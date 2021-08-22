import React from "react";
import "../../style/nft-only.css";
import { ChangePrice } from "../MyWallet/ChangePrice";
import { ethers } from "ethers";
import { Popup } from "../Generics/Popup";
import { Transfer } from "../MyWallet/Transfer"
import { BiCoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { GiPalette } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { IoPricetag } from "react-icons/io5"; 
import { RiPriceTag2Fill } from "react-icons/ri";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GiQueenCrown } from "react-icons/gi";
import { HiCash } from "react-icons/hi";
import { TiStar } from "react-icons/ti";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
   useHistory
  } from "react-router-dom";

export class NFTOnly extends React.Component{

    constructor(props){
        super(props);
        const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading",
        "attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        
        const files = require("../../localDB/uri_files.json");
        let forMint = {};

        Object.entries(files).map( ([key,value],index) => {
            
            const uri = require("../../uris/"+value+".json");
            forMint[key]=uri;
        });
        this.state = {nftsForMint: forMint, mounted:false, uri:demo_NFT, minted:false, exists:false};

        this.seeInGallery = this.seeInGallery.bind(this);
    }

    async componentDidMount(){
        //we wait until the Dapp loads the wallet.
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        while(!this.props.address){
          await sleep(500);  
        }
          console.log(this.props);
          let data;
       // }
        //const data = await this.props.getNFTData(this.props.id);
        try{
            data = await this.props.getNFTData(this.props.id);
            console.log("caught data from blockchain:",data);
            await this.setState({minted: true, uri:data, exists:true});
        }catch{
            try{
                data = this.state.nftsForMint[this.props.id];
                if( data ){
                    console.log("caught data from Minting:",data);
                    await this.setState({uri:data, exists:true});
                }
                
            }catch{
                console.log(this.state.exists);
                console.log("definetely a wrong id:");
                
            }
        }
        
        
    }


    seeInGallery(){
        console.log("see it gallery for id: ",this.props.id);
    }


    render(){
        console.log(this.state.exists);
        if(!this.state.exists){
            return(
                <div>
                    NFT doesn't exist
                </div>
            )
        }
        let CID="";
        let pinata_content_url;
        let animation=false;
        if (this.state.uri.animation_url!=undefined && this.state.uri.animation_url!=""){
        animation=true;
        CID = (this.state.uri.animation_url).substring(7);
        }else{
        CID = (this.state.uri.image).substring(7);
        }
        if(CID){
        pinata_content_url = "https://ipfs.fleek.co/ipfs/"+CID;
        console.log("pinata_content_url", pinata_content_url);
        }else{
        if (animation){
            pinata_content_url = "https://ipfs.fleek.co/ipfs/bafybeihj7gwt5cqj2pk35qkdthyt5dmvknstf2k4fqsrwgmpchd7ucypni";//change this for logo later
    
        }else{
            pinata_content_url = "https://ipfs.fleek.co/ipfs/QmNZxE7QumQqD4WkvPBps7yfwW876Ns55dCf6tCbcFvF5a";//change this for logo later
        }
        }
        return(
            <div className="nft-container">
                <div className="imageContainer">
                    <a href={pinata_content_url} target="_blank" rel="noopener noreferrer">
                    {animation? 
                        <video loop autoPlay controls muted
                        style={{width:"100%"}}
                        >
                        <source src={pinata_content_url} type="video/mp4"/>
                        <source src={pinata_content_url} type="video/ogg" />
                        Your browser does not support the video tag.
                        </video>
                        :
                        <img 
                        src={pinata_content_url}
                        alt={this.state.uri.name}
                        className="imageNFT"
                        />
                    }
                    </a>
                </div>

                <div className="info-container">

                    <div className="msg-container">

                        <div className={this.state.uri.message==="" ? "dont-show" : "msg-title"}><MdMessage style={{verticalAlign:"middle"}}/> Message:
                        </div>

                        <div className={this.state.uri.message==="" ? "dont-show" : 
                        this.state.uri.message==="" || this.state.uri.message===undefined ? "no-message" : "message"}>
                            {this.state.uri.message==="" || this.state.uri.message===undefined  ? 
                            "This NFT has no message yet. You can set it yourself if you buy this NFT!" :
                            this.state.uri.message} 
                        </div>
                    </div>

                    <div className="NFTTitle">
                        Name: {this.state.uri.name}
                    </div>

                    <div className="nft-id">
                        Id: &nbsp;{this.props.id}
                    </div>

                    <div className="description">
                    Description: {this.state.uri.description}
                    </div>

                    <div className="owner-address">
                    Owner Address: { this.state.minted? this.state.uri.nftOwner : "Not minted yet!"}
                    </div>
                    
                    <div className="artist-container">
                        <div className="artist-title">
                            <GiPalette />&nbsp;Artist: &nbsp;
                        </div>
                        <div className="artist-name">
                            <a href={this.state.uri.attributes.webpage} className="link" target="_blank" rel="noopener noreferrer"
                                className="artist-link" >
                            {this.state.uri.attributes.artist }
                            </a>
                        </div>
                    </div>

                    <div className="royalty-container">
                        <div className="royalty">
                            <GiQueenCrown style={{verticalAlign:"middle"}}/>&nbsp;NFT-Royalty: &nbsp;
                            </div>
                        <div className="royalty-value"> 6.9%  </div>
                    </div>

                    <div className={ "button-container"}>

                        <button onClick={this.seeInGallery} className="button">
                        See It In The Gallery

                        </button>
                    </div>
                </div>
            </div>


        );

    }

}