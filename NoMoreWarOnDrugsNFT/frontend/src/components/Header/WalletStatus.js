import React from "react";
import { IoWallet } from "react-icons/io5";
import {ChangeLanguage} from "./Language";
import '../../style/walletStatus.css'

export class WalletStatus extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
      console.log("this.props.network",this.props.network);
        
      }

    async componentDidMount(){
        if (window.ethereum === undefined) {
            return ;
        }
        await this.props.connectWallet();
    }
    
    async handleClick (){
        await this.props.connectWallet();
        console.log("clicked");
    }

  render(){
      // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install MetaMask.
    if (window.ethereum === undefined) {
        return (
        <div className="wallet-language-container">
            <ChangeLanguage/>
            <div className="spacer">-</div>
            <div className="app-network">{this.props.network}</div>
            <div className="spacer">-</div>
            <div className="wallet not-connected">
                <button className="wallet-button not-connected">
                    <IoWallet style={{verticalAlign:"middle"}}/>&nbsp;No wallet detected
                 </button>
            </div>
        </div>
        );
        
      }
    return (
        <div className="wallet-language-container">
            <ChangeLanguage/>
            <div className="spacer">-</div>
            <div className={this.props.network==="mainnet"?"app-network":"app-network testnet"}>{this.props.network}</div>
            <div className="spacer">-</div>
            <div className={this.props.connected ? "wallet connected" : "wallet not-connected"}>
                <button className={this.props.connected ? "wallet-button connected" : "wallet-button not-connected"}
                onClick={this.handleClick}>
                    <IoWallet style={{verticalAlign:"middle"}}/>&nbsp;
                {this.props.connected ? "address :  "+this.props.address.substr(0,7) + " ... " +
                this.props.address.substr(this.props.address.length - 6, this.props.address.length) :
                 "Not Connected"}
                 </button>
            </div>
        </div>
    );
    }
}
