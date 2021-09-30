import React from "react";
import { ethers } from "ethers";
import { Popup } from "../Generics/Popup";


export class RoyaltyReceiver extends React.Component{

  constructor(props){
    super(props);
   
    
    this.state ={contractAddress: "",  amount: 0, balance:0, txHash:"", 
      popupVisible: false, waiting:false, successful:false};

    this.withdraw = this.withdraw.bind(this);
    this.connect = this.connect.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeContractAddress = this.handleChangeContractAddress.bind(this);
    this.closePopup = this.closePopup.bind(this);

    this.amountInput = React.createRef();
    this.cotractAddressInput = React.createRef();
 
  }
  handleChangeAmount(event) {
    this.setState({amount: event.target.value});
  }

  handleChangeContractAddress(event) {
    this.setState({contractAddress: event.target.value});
  }

  async connect(event){
    event.preventDefault();
    const contractAddress = this.state.contractAddress;
    console.log("contractAddress: ",contractAddress);
    console.log("this.props.address: ",this.props.address);

    const abi = [
    "function getBalance(address _address) external view returns(uint)"
    ];
    const iface = new ethers.utils.Interface(abi);
    const data = iface.encodeFunctionData("getBalance", [this.props.address]);
    
    const params = [
        {
        //from: this.props.address,
        to: contractAddress,
        data: data
        },
    ];
    await window.ethereum
        .request({
        method: 'eth_call',
        params,
        })
        .then(async (res) => {
            this.setState({balance:parseInt(res)});
        console.log("reading response from royalty contract",res);
    });
        

  }

async withdraw(event) {
    event.preventDefault();
    const contractAddress = this.state.contractAddress;
    console.log("contractAddress: ",contractAddress);
    const amount = this.state.amount;
    console.log("amount: ",amount);

    const abi = [
    "function withdraw(uint amount) external"
    ];
    const iface = new ethers.utils.Interface(abi);
    const data = iface.encodeFunctionData("withdraw", [amount]);
    
    const params = [
        {
        from: this.props.address,
        to: contractAddress,
        value: 0, 
        data: data
        },
    ];
    
    console.log("params:",params);
    this.setState({popupVisible: true});
    console.log("about to send tx");
    await window.ethereum
        .request({
        method: 'eth_sendTransaction',
        params,
        })
        .then(async (txHash) => {
        this.setState({waiting: true});
        console.log(txHash);
        this.setState({txHash: txHash});
        await this.props.waitForMinedConfirmation(txHash, (tx) => {
          this.setState({waiting: false});
          this.setState({successful: true});
          console.log("tx mined: ", tx);
          const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
          const currentUrl = window.location.href;
          sleep(2000).then( () => window.location.href = currentUrl).catch( error => console.log("error while reloading:",error));
    
      });
    })
        .catch((error) => {
        console.log(error);
        // If the request fails, the Promise will reject with an error.
        });
  }

  closePopup(){
    this.setState({popupVisible:false});
  }

  render(){
    return (
      <div>
          
        <h4 className="component-title">Withdraw royalties from contract</h4>
        <p style={{marginLeft:"8vw",marginRight:"8vw"}}>
        Here, you can connect to your royalty contract. Simply put your royalty-contract address, and click "connect".
        This will give you the balance available for you (in weis). Then, enter the amount in weis you wish to withdraw,
        and that's it. Please Remember to be logged in with the account entitled to the royalties. Otherwise, your 
        balance will always show 0. If you are not sure what's the royalty-contract address, you can find this 
        information in the URI of your NFT. 
        </p>
        <form onSubmit={this.connect}>
        
        <div className="form-group">
            <label>Royalty Contract Address: </label>
            <input
                className="form-control"
                type="text"
                name="id"
                onChange={this.handleChangeContractAddress}
                ref={this.cotractAddressInput}
                required
                />
            
            <label >Your Balance (wei): {this.state.balance}</label>
            </div>
            <div className="form-group">
                <input className="btn btn-primary" type="submit" value="Connect" />
             </div>
            </form>
        <form onSubmit={this.withdraw}>
          <div className="form-group">
          <label>Amount (wei): </label>
            <input
              className="form-control"
              type="number"
              name="price"
              step="0.00001"
              onChange={this.handleChangeAmount}
              ref={this.amountInputnput}
              required
            />
            
            <label >Tx Hash: {this.state.txHash}</label>
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" value="withdraw" />
          </div>
        </form>

            <Popup 
            visible = {this.state.popupVisible}
            txHash={this.state.txHash}
            waiting={this.state.waiting}
            successful = {this.state.successful}
            close = {()=>{this.closePopup()}}
            />
        
      </div>
    );
  }
}