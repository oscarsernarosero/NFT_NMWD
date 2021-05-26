import React from "react";
import "../../style/balance.css";

export class Balance extends React.Component{

  constructor(props){
    super(props);
    this.state = {amount: "", balance: "",txHash: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBalance = this.getBalance.bind(this);
    this.getMax = this.getMax.bind(this);
    
  }
  async componentDidMount() {
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
      await sleep(1000);   
      this.getBalance();
}

    async getBalance(){
        console.log(this.props);
        const balance =  await this.props.getUserBalance(this.props.address);
        console.log("got balance: ",parseInt(balance._hex));
        if(balance.error){
        this.setState({balance: "Oops! Somethig went wrong. Try again later."});
        }else{
        this.setState({balance: parseInt(balance._hex)/1000000000000000000});
        }
    }

handleChange(event) {
    this.setState({amount: event.target.value});
  }

  async getMax(event){
    console.log("getMax activated");
    let max = await this.props.getUserBalance(this.props.address);
    max-=1;
    this.setState({amount: parseInt(max)});
}


  async handleSubmit(event) {
    event.preventDefault();
    const amount = this.state.amount;


    
    this.setState({txHash: "..."});
    console.log(this.props);
    const txHash =  await this.props.withdrawUserFunds(amount.toString());
    console.log("got txHash: ",txHash);
    if(txHash.error){
    this.setState({txHash: "Oops! Somethig went wrong. Try again later."});
    }else{
    this.setState({txHash: txHash.hash});
    }
  }

  render(){
    return (
        <div className="balance-component-container">
            
            <div className="balance-container">
                <div className="label-balance" >
                    Your balance:
                </div>
                <div className="balance-display">
                    {this.state.balance} ETH
                </div>
            </div>

            <div className="withdraw-container">
                <button onClick ={this.getMax} className="btn btn-helper">
                    Withdraw Max Value</button>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-withdraw">
                    
                        <label>Amount</label>
                        <input
                        className="form-control-withdraw"
                        type="number"
                        step="1"
                        name="amount"
                        onChange={this.handleChange}
                        value={this.state.amount}
                        required
                        />
                        <label name = "txHash">txHash: {this.state.txHash}</label>
                    </div>
                    <div className="form-withdraw">
                        <input className="button-center" type="submit" value="Withdraw From Marketplace" />
                    </div>
                </form>
            </div>
      </div>
        );
    }
}