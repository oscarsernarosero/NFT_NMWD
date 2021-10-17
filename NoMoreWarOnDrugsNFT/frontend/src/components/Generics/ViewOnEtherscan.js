import React from "react";
import "../../style/view-on-etherscan.css";

export class ViewOnEtherscan extends React.Component{

    render(){
        let base_url;
        if (this.props.network == "mainnet"){
            base_url="https://etherscan.io/tx/";
        }else{
            base_url="https://"+this.props.network+".etherscan.io/tx/";
        }

        return(
            <div className={this.props.txHash!=="" || this.props.txHash.error ? "view-on-etherscan" : "not-visible"}>
                {this.props.txHash? this.props.txHash.error ? 
                "Something went wrong"
                : 
                <div className="justify-center">
                    <a href={base_url+this.props.txHash} 
                        target="_blank" 
                        rel="noopener noreferrer"> 
                
                    View Tx on Etherscan</a>
                </div>
                :""}
                
            </div>
        );
    }
}


