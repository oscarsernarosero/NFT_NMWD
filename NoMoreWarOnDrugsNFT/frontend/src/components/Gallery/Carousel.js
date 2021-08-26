import React from "react";
import "../../style/carousel.css"
import Coverflow from 'react-coverflow';
import { ImageNFT } from '../Gallery/ImageNFT';

export class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.fn = this.fn.bind(this);
        this.state={background:"000000", selected:0,width:window.innerWidth};
    }


    fn (active) {
        this.setState({selected:active});
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
        
        
    async componentDidUpdate(prevProps){
        if (this.props.page !== prevProps.page){
            this.setState({selected:3});
        }
    }  

    render(){
        let displayQtyOfSide;
        let sideScale;
        if(this.state.width>900){
            displayQtyOfSide=0.9;
            sideScale=0.5
        }else{
            displayQtyOfSide=0.2;
            sideScale=1;
        }
    
        return(
            
            <div id="carousel-3d-container" 
                style={{"background" : "linear-gradient(to top, transparent 1%, black 40%), #"+this.state.background,
                        "transition":"background-color 0.8s ease",
                        //"marginLeft":"-4vw", "marginRight":"-3vw"
                        }}>

                
                            
                <Coverflow
                    //displayQuantityOfSide={1.3}
                    displayQuantityOfSide={displayQtyOfSide}
                    infiniteScroll={true}
                    enableHeading={false}
                    //otherFigureScale={0.3}
                    otherFigureScale={sideScale}
                    //currentFigureScale={1.15}
                    currentFigureScale={1}
                    enableScroll={false}
                    // width={1900}
                    // height={760}
                    active={this.state.selected}
                    media={{
                        '@media (max-width: 900px)': {
                          width: '400px',
                          height: '450px'
                        },
                        '@media (min-width: 900px)': {
                          width: '1300px',
                          height: '750px'
                        }
                      }}
                    
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