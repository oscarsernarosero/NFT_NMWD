import React from "react";
import { ImageNFT } from "./ImageNFT";
import "../../style/gallery.css";

export class Gallery extends React.Component{

  constructor(props){
    super(props);
    const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}]}
    this.state = {nfts: [demo_NFT], mounted: false};
    console.log(this.state);
    console.log("marketplace address: ",this.props.marketPlaceAddress);
    
    
  }
  componentDidMount() {
    this.getNFTs = this.getNFTs.bind(this);
    this.getNFTs();
    this.setState({mounted: true});
}


async componentDidUpdate(prevProps){
  if(prevProps.address !== this.props.address && this.state.mounted === true){
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
      await sleep(350);    
      await this.getNFTs();
  }
}

  async getNFTs(){
    const nfts = await this.props.getAllNFTs();
    this.setState({nfts: nfts});
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
                        mywallet = {false}
                        address = {this.props.address}
                        marketPlaceAddress = {this.props.marketPlaceAddress}
                    /></li>
            })}
            </ul>
          </div>
        );
    }
}