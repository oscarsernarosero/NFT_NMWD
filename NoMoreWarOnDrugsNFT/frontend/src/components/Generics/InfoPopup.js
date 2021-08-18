import React from "react";
import "../../style/info-popup.css"

import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button'

/**
* @dev This is a generic popup for displaying information about a front end feature.
This is triggered by the "?" button found on some aread of the UI.
* @param msg the string containing the info to display.
* @param visible boolean indicating the visibility of the popup.
* @param viewInfo function that alters the visibility of the popup.
*/
export function InfoPopup(_props) {
    const [show, setShow] = React.useState(false);
    const target = React.useRef(null);
    console.log(_props);
    console.log("show",show);
    return (
        
      <div >
        <button ref={target} onClick={() => setShow(!show)}>
          ?
        </button>
        <Overlay target={target.current} show={show} placement="right">
            
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {_props.msg}
            </Tooltip>
          )}
        </Overlay>
      </div>
    );
  }
