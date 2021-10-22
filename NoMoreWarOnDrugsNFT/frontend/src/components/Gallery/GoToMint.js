
import React from "react";
import "../../style/gallery.css";
import {
  useParams
} from "react-router-dom";

export class GoToMint extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const currentUrl = window.location.href;
        let i = currentUrl.lastIndexOf('#/');
        const url=currentUrl.substr(0,i)+"#/mint/";
        console.log(url)
        window.location.href = url;
    }


    render(){
        return(
            <div className="go-to-mint-container">
                <div className="go-to-mint-text">
                    Check out NFTs available for minting 
                </div>
                <div className="go-to-mint-button-container">
                    <button className="go-to-mint-button" onClick={this.handleClick}>Go To Mint!</button>
                </div>
                </div>

        );
    }
    
  
    
    
}