import React from "react";
import "../../style/left-image.css"


export class LeftImage extends React.Component {
    render(){
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
                className="left-container" 
                style={this.props.backgroundImage?{backgroundColor:"#000000cc"}:{}}
            >
                <div className="left-image-container">
                    <img 
                        src={this.props.src}
                        alt={this.props.alt}
                        className="left-image"
                        />
                </div>
                <div className="left-text">
                    <h2>{this.props.title}</h2>
                    {this.props.text}
                </div>
                </div>
            </div>
            
        );
    }
}