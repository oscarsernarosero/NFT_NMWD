import React from "react";
import { ViewOnEtherscan } from "./ViewOnEtherscan"
import "../../style/change-price.css"
import { WaitingForComfirmation } from "./WaitingForComfirmation";

/**
* @dev This is a generic component for confirming a transaction in the blockchain with
* visual updating of the tx status.
* @param waiting boolean that indicates if we are waiting for a tx for being proccessed 
* in the blockchain or not.
* @param txHash of the tx we are confirming.
* @param successful boolean that indicates if the tx with txHash actually got mined or not.
*/
export class LiveBlockchainStatus extends React.Component{
      

    render(){ return (
        <div > 
                    <div className="tx-hash-price">
                        <ViewOnEtherscan
                            txHash={this.props.txHash}
                        />
                        
                    </div>
      
                    <WaitingForComfirmation
                        waiting={this.props.waiting}
                        txHash = {this.props.txHash}
                    />
                    <div className={this.props.successful ? "success justify-center" : "not-visible"}>
                    Your transaction was successful!
                    </div>     
        </div>

    )}
}
