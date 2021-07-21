import React from "react";


export class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.gallery = this.gallery.bind(this);
    }

    gallery(event){
        const currentUrl = window.location.href;
        window.location.href = currentUrl+"gallery";
    
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