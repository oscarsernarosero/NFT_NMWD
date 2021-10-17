import React from "react";
import "../../style/nft-only.css";
import { GiPalette } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { GiQueenCrown } from "react-icons/gi";


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
        const currentUrl = window.location.href;
        let i = currentUrl.lastIndexOf('nftbyid/');
        let url="";
        if(this.state.minted){
            url=currentUrl.substr(0,i)+"gallery/1/"+this.props.id;
        }else{
            url=currentUrl.substr(0,i)+"mint/1/"+this.props.id;
        }
        
        console.log(url)
        window.location.href = url;
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
        if (this.state.uri.animation_url!==undefined && this.state.uri.animation_url!==""){
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
            <div className="nft-only-container">
                <div className="imageContainer-nft">
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
                        className="imageNFT-only"
                        />
                    }
                    </a>
                </div>

                <div className="info-container">

                    <div className="msg-container-nft">

                        <div className={this.state.uri.message==="" ? "dont-show" : "msg-title-nft"}>
                        <MdMessage style={{verticalAlign:"middle"}}/> Message:&nbsp;
                        </div>

                        <div className={this.state.uri.message==="" ? "dont-show" : 
                        this.state.uri.message==="" || this.state.uri.message===undefined ? "no-message-nft" : "message-nft"}>
                            {this.state.uri.message==="" || this.state.uri.message===undefined  ? 
                            "This NFT has no message yet. You can set it yourself if you buy this NFT!" :
                            this.state.uri.message} 
                        </div>
                    </div>

                    <div className="NFTTitle-nft">
                        Name: {this.state.uri.name}
                    </div>

                    <div className="nft-id-nft">
                        Id: &nbsp;{this.props.id}
                    </div>

                    <div className="description-nft">
                    Description: {this.state.uri.description}
                    </div>

                    <div className="owner-address-nft">
                    Owner Address: { this.state.minted? this.state.uri.nftOwner : "Not minted yet!"}
                    </div>
                    
                    <div className="artist-container-nft">
                        <div className="artist-title-nft">
                            <GiPalette />&nbsp;Artist: &nbsp;
                        </div>
                        <div className="artist-name-nft">
                            <a href={this.state.uri.attributes.webpage} target="_blank" rel="noopener noreferrer"
                                className="artist-link-nft" >
                            {this.state.uri.attributes.artist }
                            </a>
                        </div>
                    </div>

                    <div className="royalty-container-nft">
                        <div className="royalty-nft">
                            <GiQueenCrown style={{verticalAlign:"middle"}}/>&nbsp;NFT-Royalty: &nbsp;
                            </div>
                        <div className="royalty-value-nft"> 6.00%  </div>
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