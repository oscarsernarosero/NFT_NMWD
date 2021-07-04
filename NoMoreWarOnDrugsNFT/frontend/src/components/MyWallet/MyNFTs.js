import React from "react";
import { PaginationNFTs } from "../Gallery/PaginationNFTs"
import "../../style/myNFTs.css";
import { ImageNFT } from "../Gallery/ImageNFT";


  export class MyNFTs extends React.Component{

      render(){
        return (
            <div className="gallery">
                <div className="title-my-nfts">
                    My NFTs
                </div>

                <PaginationNFTs
                mywallet = {true}
                setTokenMessage={ (_tokenId, _msg ) => {
                    return this.props.setTokenMessage(_tokenId, _msg );
                  }}
                setForSale = { (tokenId, forSale) => {
                    return this.props.setForSale(tokenId, forSale);
                  }}
                setSelectedId = {(id, imageUrl, price) => {
                    return this.props.setSelectedId(id, imageUrl, price);
                }}
                setPrice = { (price, tokenId) => {
                    return this.props.setPrice(price, tokenId);
                  }}

                address = {this.props.address}
                getNFTData={ (id) => {
                    return this.props.getNFTData(id);
                }}
                getNFTidsByAddress={(address) => {
                    return this.props.getNFTidsByAddress(address);
                }}
                getAllNFTsIdsOnly = { () => {
                    return this.props.getAllNFTsIdsOnly();
                }}
                waitForMinedConfirmation={ (tx_hash, func) => {
                    return this.props.waitForMinedConfirmation(tx_hash, func);
                  }}
                  safeTransfer = { (owner, to, tokenId) => {
                    return this.props.safeTransfer(owner, to, tokenId);
                  }}
            />
              </div>
            );
        }
}