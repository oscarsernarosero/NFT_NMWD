import React from "react";
import "../../style/info-only-popup.css"


/**
* @dev This is a generic popup that wraps the LiveBlockchainStatus for confirming a transaction
* in the blockchain with visual updating of the tx status.
* @param waiting boolean that indicates if we are waiting for a tx for being proccessed 
* in the blockchain or not.
* @param msg the message to display.
* @param close function that alters the visibility of the popup.
*/
export class OnlyTextPopup extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
    }



    render(){ return (
        <div > 
            <div  className="info-only-popup-container">
                <div className="close-button">
                    <button onClick={this.props.close} className="button-close-button">x</button>
                </div>
                <div className="popup-msg">
                        {this.props.msg}
                </div>
            </div>
        </div>

    );}
}