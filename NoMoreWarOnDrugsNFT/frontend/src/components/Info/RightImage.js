import React from "react";
import "../../style/right-image.css"


export class RightImage extends React.Component {
    render(){
        console.log("this.props.backgroundImage",this.props.backgroundImage);
        return (
            <div 
            style={this.props.backgroundImage? {
                backgroundImage:"url('"+this.props.backgroundImage+"')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }:{}}
            >
                <div
                className="right-container" 
                style={this.props.backgroundImage?{backgroundColor:"#000000cc"}:{}}
                >
                
                <div className="right-text">
                <h2>{this.props.title}</h2>
                    {this.props.text}
                </div>
                <div className="right-image-container">
                    <img 
                    src={this.props.src}
                    alt={this.props.alt}
                    className="right-image"
                    />
                </div>
                </div>
            </div>
            
        );
    }
}