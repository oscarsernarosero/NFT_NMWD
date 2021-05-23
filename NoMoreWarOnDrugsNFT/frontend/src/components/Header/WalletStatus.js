import React from "react";
import '../../style/walletStatus.css'

export class WalletStatus extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
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
        <div>
            <div className="wallet not-connected">
                <button className="wallet-button not-connected">
                    No wallet detected
                 </button>
            </div>
        </div>
        );
        
      }
    return (
        <div>
            <div className={this.props.connected ? "wallet connected" : "wallet not-connected"}>
                <button className={this.props.connected ? "wallet-button connected" : "wallet-button not-connected"}
                onClick={this.handleClick}>
                {this.props.connected ? "address :  "+this.props.address.substr(0,7) + " ... " +
                this.props.address.substr(this.props.address.length - 6, this.props.address.length) :
                 "Not Connected"}
                 </button>
            </div>
        </div>
    );
    }
}
