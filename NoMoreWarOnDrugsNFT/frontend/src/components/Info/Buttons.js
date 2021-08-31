import React from "react";


export class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.gallery = this.gallery.bind(this);
    }

    gallery(event){
      const currentUrl = window.location.href;
      let i = currentUrl.lastIndexOf('#/');
      const url=currentUrl.substr(0,i)+"#/gallery/1";
      console.log(url)
      window.location.href = url;
    
    }
    render(){
        return (
            <div className="home-buttons">
                <div>
                    <h2 className="explore-nft"> Explore our gallery of NFTs</h2>
                </div>
                <div className="test">
                    <button className="explore-nft-button"
                    onClick={this.gallery}>Gallery</button>
                </div>
                
            </div>
            
        );
    }
}