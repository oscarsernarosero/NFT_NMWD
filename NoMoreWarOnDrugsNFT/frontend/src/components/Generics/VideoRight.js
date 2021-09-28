import React from "react";
import "../../style/video-right.css"


export class VideoRight extends React.Component {
    render(){
        return (
            <div >
                <div
                    className="right-video-container" 
                    style={this.props.backgroundImage?{backgroundColor:"#000000cc"}:{}}
                    >
                    <div className="right-video-text">
                        <h2>{this.props.data[1].title}</h2>
                        {this.props.data[1].text}
                    </div>
                    <div className="video-container">
                        <iframe width="350" height="180" src={this.props.data[1].videoUrl}>
                        </iframe>
                    </div>
                </div>
            </div>
            
        );
    }
}