import React from "react";
import "../../style/carousel.css"
import Coverflow from 'react-coverflow';
import { ImageNFT } from '../Gallery/ImageNFT';

export class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.fn = this.fn.bind(this);
    }


    fn () {
        console.log("function");
      }

    render(){
        return(
            <div id="carousel-3d-container">
                
                <Coverflow
                    displayQuantityOfSide={1}
                    infiniteScroll={false}
                    enableHeading={false}
                    otherFigureScale={0.5}
                    currentFigureScale={1}
                    enableScroll={false}
                    width={800}
                    height={780}
                    >
                    
                    {this.props.nfts.map((item,index)=>{
                    return (
                        <ImageNFT
                            address = {this.props.address}
                            marketPlaceAddress = {this.props.marketPlaceAddress}
                            uri = {item}
                            setTokenMessage={ (_tokenId, _msg ) => {
                                return this.props.setTokenMessage(_tokenId, _msg );
                            }}
                            mywallet = {this.props.mywallet}
                            setForSale = { (tokenId, forSale) => {
                                return this.props.setForSale(tokenId, forSale);
                              }}
                              setSelectedId = {(id, imageUrl, price) => {
                                return this.props.setSelectedId(id, imageUrl), price;
                            }}
                            setPrice = { (price, tokenId) => {
                                return this.props.setPrice(price, tokenId);
                              }}
                              waitForMinedConfirmation={ (tx_hash, func) => {
                                return this.props.waitForMinedConfirmation(tx_hash, func);
                              }}
                        />
                );}
                    )}
                
                    </Coverflow>
            </div>
        );
    }
    
}