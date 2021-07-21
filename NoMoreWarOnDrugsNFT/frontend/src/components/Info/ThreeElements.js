import React from "react";
import "../../style/three-elements.css"


export class ThreeElements extends React.Component {
    render(){
        return (
            <div 
                style={this.props.backgroundImage? {
                backgroundImage:"url('"+this.props.backgroundImage+"')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
                }:{}}
                 >
                <div
                    className="three-elements-container" 
                    style={this.props.backgroundImage?{backgroundColor:"#000000bb"}:{}}
                    >
                    <div className="element">
                        <h4>{this.props.leftTitle}</h4>
                        {this.props.leftText}
                    </div>
                    <div className="element">
                        <h4>{this.props.middleTitle}</h4>
                        {this.props.middleText}
                    </div>
                    <div className="element">
                        <h4>{this.props.rightTitle}</h4>
                        {this.props.rightText}
                    </div>
                </div>
            </div>
            
        );
    }
}