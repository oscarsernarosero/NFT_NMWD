import React from "react";
import "../../style/view-on-etherscan.css";

export class ViewOnEtherscan extends React.Component{

    render(){
        return(
            <div className={this.props.txHash!=="" || this.props.txHash.error ? "view-on-etherscan" : "not-visible"}>
                {this.props.txHash.error ? 
                "Something went wrong"
                : 
                <div>
                    <a href={"https://ropsten.etherscan.io/tx/"+this.props.txHash} 
                        target="_blank" 
                        rel="noopener noreferrer"> 
                
                    View Tx on Etherscan</a>
                </div>
                }
                
            </div>
        );
    }
}


