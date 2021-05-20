import React from "react";
import { ImageNFT } from "./ImageNFT";
import "../../style/gallery.css";

export class Gallery extends React.Component{

  constructor(props){
    super(props);
    const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}]}
    this.state = {nfts: [demo_NFT]};
    console.log(this.state);
    
    
  }
  componentDidMount() {
    this.getNFTs = this.getNFTs.bind(this);
    this.getNFTs();
}

  async getNFTs(){
    const nfts = await this.props.getAllNFTs();
    this.setState({nfts: nfts});
  }
  
  render(){
    return (
      <div className="gallery">
        <ul classnName="list">
            {this.state.nfts.map((item,index)=>{
                return <li className="galleryItem"
                key={index}>
                    <ImageNFT
                        uri = {item}
                    /></li>
            })}
            </ul>
          </div>
        );
    }
}