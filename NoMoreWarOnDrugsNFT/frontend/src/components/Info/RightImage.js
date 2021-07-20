import React from "react";
import "../../style/right-image.css"


export class RightImage extends React.Component {
    render(){
        return (
            <div className="right-container">
                
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
            
        );
    }
}