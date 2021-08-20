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

                <PaginationNFTs
                mywallet = {true}
                {...this.props}
            />
              </div>
            );
        }
}