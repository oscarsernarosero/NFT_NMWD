import React from "react";
import { RiYoutubeFill } from "react-icons/ri";
import { RiPaletteFill } from "react-icons/ri";


export class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.gallery = this.gallery.bind(this);
        this.channel = this.channel.bind(this);
    }


    gallery(event){
      const currentUrl = window.location.href;
      let i = currentUrl.lastIndexOf('#/');
      const url=currentUrl.substr(0,i)+"#/gallery/1";
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
                    <div>
                    
                        <h2 className="explore-nft"> Explore more about why the war on drugs is a sham.
                        
                        </h2>
                    </div>
                    <div className="test">
                        <button className="explore-nft-button"
                        onClick={this.channel}><RiYoutubeFill style={{verticalAlign:"middle"}}/> Channel</button>
                    </div>
                </div>
                <div className="home-buttons-section">
                
                    <div>
                        <h2 className="explore-nft"> Explore our gallery of NFTs and get a piece of history with you today.
                        </h2>
                    </div>
                    <div className="test">
                        <button className="explore-nft-button"
                        onClick={this.gallery}><RiPaletteFill style={{verticalAlign:"middle"}}/> Gallery</button>
                    </div>
                </div>
            </div>
            
        );
    }
}