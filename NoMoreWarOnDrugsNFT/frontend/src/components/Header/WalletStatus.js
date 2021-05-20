import React from "react";
import '../../style/walletStatus.css'

export class WalletStatus extends React.Component{

    constructor(props){
        super(props);
        this.state = {connected: props.connected, address: props.address ? props.address : "Not Connected"};
        console.log(this.state);
        this.handleClick = this.handleClick.bind(this);
        
      }
    
    async handleClick (){
        const address = await this.props.connectWallet();
        console.log(address);
        this.setState({address:address});
        if(address){
            this.setState({connected: true});
        }
    }

  render(){
      // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install MetaMask.
    if (window.ethereum === undefined) {
        this.setState({address:"No wallet detected"});
      }
    return (
        <div>
            <div className={this.state.connected ? "wallet connected" : "wallet not-connected"}>
                <button className={this.state.connected ? "wallet-button connected" : "wallet-button not-connected"}
                onClick={this.handleClick}>
                {this.state.connected ? "address :  "+this.state.address.substr(0,7) + " ... " +
                this.state.address.substr(this.state.address.length - 6, this.state.address.length) :
                 this.state.address}
                 </button>
            </div>
        </div>
    );
    }
}
