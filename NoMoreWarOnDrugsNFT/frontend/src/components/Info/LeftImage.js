import React from "react";
import "../../style/left-image.css"


export class LeftImage extends React.Component {
    render(){
        return (
            <div className="left-container">
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
            
        );
    }
}