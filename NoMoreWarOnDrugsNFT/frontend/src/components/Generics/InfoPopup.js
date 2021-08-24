import React from "react";
import "../../style/info-popup.css"
import { OnlyTextPopup } from "./OnlyTextPopup";

/**
* @dev This is a generic popup for displaying information about a front end feature.
This is triggered by the "?" button found on some aread of the UI.
* @param msg the string containing the info to display.
* @param visible boolean indicating the visibility of the popup.
* @param viewInfo function that alters the visibility of the popup.
*/
export class InfoPopup extends React.Component{

  constructor(props){
    super(props);
    this.state = {visible:false};
  }

    
  render(){
    return (
      <div className="tooltip-container">
        <button  onClick={this.props.viewInfo} className="info-button">
          ?
        </button>
        <div className={this.props.visible?"visible":"not-visible"}>
          <OnlyTextPopup 
            msg={this.props.msg}
            close={this.props.viewInfo}
          />
        </div>
      </div>
    );
  }
  
  }
