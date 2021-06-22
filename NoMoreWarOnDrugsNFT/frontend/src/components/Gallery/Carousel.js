import React from "react";
import "../../style/carousel.css"
import Coverflow from 'react-coverflow';
import { ImageNFT } from '../Gallery/ImageNFT';

export class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.fn = this.fn.bind(this);
        this.state={background:"000000"};
    }


    fn (active) {
        if(active !== undefined){
            // console.log("function", active);
            // let R = (active*4).toString(16);
            // if (R.length<2){R = "0"+R};
            // let G = (21 - (active*4)).toString(16);
            // if (G.length<2){G = "0"+G};
            // let B = (36 + active*4).toString(16);
            // if (B.length<2){B = "0"+B};
            // this.setState({background: R + G + B});
            // console.log(this.state.background);
            if(active%3===0){
                this.setState({background: "02579b"});
            }else if(active%3===1){
                this.setState({background: "007579"});
            }else{
                this.setState({background: "40307b"});
            }
            }
        }
        
        
      

    render(){
        return(
            <div id="carousel-3d-container" 
            style={{"background-image": "linear-gradient(180deg, black, black, #"+this.state.background+")", "transition": "background-image .9s linear"}}>
                
                <Coverflow
                    displayQuantityOfSide={1}
                    infiniteScroll={false}
                    enableHeading={false}
                    otherFigureScale={0.5}
                    currentFigureScale={1}
                    enableScroll={false}
                    width={"100%"}
                    height={780}
                    >
                    
                        {this.props.nfts.map((item,index)=>{
                        return (
                            <div onClick={()=>this.fn(index)}>
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
                            </div>
                    );}
                        )}
                        
                
                    </Coverflow>
            </div>
        );
    }
    
}