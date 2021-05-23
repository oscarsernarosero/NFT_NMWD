import React from "react";
//import { MyNFT } from "./MyNFT";
import "../../style/myNFTs.css";
import { ImageNFT } from "../Marketplace/ImageNFT"

  export class MyNFTs extends React.Component{


    constructor(props){
        super(props);
        console.log("from MyNFTs",props);
        const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.state = {nfts: [demo_NFT], mounted: false};
        console.log(this.state);
        
        
      }

    componentDidMount(){
        this.getNFTs();
        this.setState({mounted: true});
    }

    componentDidCatch(){
        const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.setState({nfts: [demo_NFT]});
      }

    async componentDidUpdate(prevProps){
        if(prevProps.address !== this.props.address && this.state.mounted === true){
            const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
            await sleep(50);    
            await this.getNFTs();
        }
    }
    
      async getNFTs(){
         if(this.props.address) {
            const nfts = await this.props.getNFTsByAddress(this.props.address);
            console.log(nfts);
            console.log("got my NFTs for address", this.props.address);
            this.setState({nfts: nfts});

         }else{
            const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "Please conncet your wallet","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}]}
            this.state = {nfts: [demo_NFT]};
        }
        
      }
      
      render(){
        return (
            <div className="gallery">
            <ul className="list">
                {this.state.nfts.map((item,index)=>{
                    return <li className="galleryItem"
                    key={index}>
                        <ImageNFT
                            uri = {item}
                            setTokenMessage={ (_tokenId, _msg ) => {
                                return this.props.setTokenMessage(_tokenId, _msg );
                            }}
                            mywallet = {true}
                            setForSale = { (tokenId, forSale) => {
                                return this.props.setForSale(tokenId, forSale);
                              }}
                        /></li>
                })}
                </ul>
              </div>
            );
        }
}