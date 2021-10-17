import React from "react";
import { RiYoutubeFill } from "react-icons/ri";
import { RiPaletteFill } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";

export class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.gallery = this.gallery.bind(this);
        this.channel = this.channel.bind(this);
        this.mint = this.mint.bind(this);
    }

    mint(event){
        const currentUrl = window.location.href;
        let i = currentUrl.lastIndexOf('#/');
        const url=currentUrl.substr(0,i)+"#/mint/";
        console.log(url)
        window.location.href = url;
      
      }

    gallery(event){
      const currentUrl = window.location.href;
      let i = currentUrl.lastIndexOf('#/');
      const url=currentUrl.substr(0,i)+"#/gallery/";
      console.log(url)
      window.location.href = url;
    
    }
    channel(event){
        const currentUrl = window.location.href;
        let i = currentUrl.lastIndexOf('#/');
        const url=currentUrl.substr(0,i)+"#/channel";
        console.log(url)
        window.location.href = url;
      
      }


    render(){
        return (
            <div className="home-buttons">
                <div className="home-buttons-section">
                    <div className="button-section-icon">
                         <RiYoutubeFill/> 
                         </div>
                    <div className="explore-nft"> Explore more about why the war on drugs is a sham through videos.
                        
                    </div>
                    
                    <div className="test">
                        <button className="explore-nft-button"
                        onClick={this.channel}>Channel</button>
                    </div>
                </div>
                <div className="home-buttons-section">
                    <div className="button-section-icon">
                        <GiTwoCoins/>
                        </div>
                    <div className="explore-nft"> Mint fresh NFTs. They come with the opportunity of immortalizing your thoughts.
                        
                    </div>
                    <div className="test">
                        <button className="explore-nft-button"
                        onClick={this.mint}> Mint</button>
                    </div>
                    </div>
                    <div className="home-buttons-section">
                        <div className="button-section-icon">
                            <RiPaletteFill/>
                        </div>
                    <div className="explore-nft"> Explore our gallery of NFTs and get a piece of history with you today.
                        
                    </div>
                    <div className="test">
                        <button className="explore-nft-button"
                        onClick={this.gallery}> Gallery</button>
                    </div>
                </div>
            </div>
            
        );
    }
}