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
           style={{"background" : "linear-gradient(to top, transparent 1%, black 40%), #"+this.state.background,
                        "transition":"background-color 0.8s ease"}}>
                
                <Coverflow
                    displayQuantityOfSide={1.3}
                    infiniteScroll={false}
                    enableHeading={false}
                    otherFigureScale={0.3}
                    currentFigureScale={1.15}
                    enableScroll={false}
                    width={900}
                    height={760}
                    
                    
                    >
                    
                        {this.props.nfts.map((key,index)=>{
                        return (
                            <div onClick={(key)=>this.fn(index)} key={index}>
                                
                            <ImageNFT
                                uri = {key}
                                {...this.props}
                            />
                            </div>
                    );}
                        )}
                        
                
                    </Coverflow>
            </div>
        );
    }
    
}