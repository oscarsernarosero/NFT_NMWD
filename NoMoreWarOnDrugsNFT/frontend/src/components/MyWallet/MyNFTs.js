import React from "react";
import { PaginationNFTs } from "../Gallery/PaginationNFTs"
import "../../style/myNFTs.css";


  export class MyNFTs extends React.Component{

      render(){
        return (
            <div className="gallery">
                <div className="title-my-nfts">
                    My NFTs
                </div>

                <p>You can see your NFTs here. Remember that your NFTs will be set as 'not for sale' once you buy/mint it. This is to give 
                    you time to set the NFT price you think best fits its value. Once you have set the price, you can check the 'for sale'
                    box to make it available in this native marketplace (gallery). 
                </p>
                {
                  this.props.provider_defaulted?
                  <span>You need to connect wallet</span>:
                  <PaginationNFTs
                                  mywallet = {true}
                                  {...this.props}
                              />
                }

                
              </div>
            );
        }
}