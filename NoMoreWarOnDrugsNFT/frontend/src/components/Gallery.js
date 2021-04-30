import React from "react";
import { ImageNFT } from "./ImageNFT";

export class Gallery extends React.Component{

  constructor(props){
    super(props);
    const demo_NFT = {"description": "Uri test 4","external_url": "unkown","image": "loading","name": "American expansionism","attributes": [ {"artist": "Oscar Serna"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}]}
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
        <ul>
            {this.state.nfts.map((item,index)=>{
                return <li key={index}>
                    <ImageNFT
                        uri = {item}
                    /></li>
            })}
            </ul>
        );
    }
}