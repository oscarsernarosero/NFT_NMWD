import React from "react";
import { LiveBlockchainStatus } from "./LiveBlockchainStatus"
import "../../style/popup.css"


/**
* @dev This is a generic popup that wraps the LiveBlockchainStatus for confirming a transaction
* in the blockchain with visual updating of the tx status.
* @param waiting boolean that indicates if we are waiting for a tx for being proccessed 
* in the blockchain or not.
* @param txHash of the tx we are confirming.
* @param successful boolean that indicates if the tx with txHash actually got mined or not.
* @param close function that alters the visibility of the popup.
*/
export class Popup extends React.Component{



    render(){ return (
        <div className = {this.props.visible ? "visible" : "not-visible" }> 
         <div  className="change-price">
            <div className="close-button">
                <button onClick={this.props.close} className="button-close-button">x</button>
            </div>
            
            <form onSubmit={this.handleSubmit} className="form-container-price">
                <div >
                    <div className={!this.props.txHash?"justify-center message-label-price":"not-visible"}>
                       Please confirm your transaction on your wallet.
                    </div>
                    
                    <div>
                        <LiveBlockchainStatus
                            txHash={this.props.txHash}
                            waiting={this.props.waiting}
                            successful = {this.props.successful}
                        />
                    </div>
                        
                </div>
            </form>
            
        </div>
        </div>

    );}
}
