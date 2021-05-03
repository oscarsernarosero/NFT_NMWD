import React from "react";

export class WithdrawUserFunds extends React.Component{

  constructor(props){
    super(props);
    this.state = {amount: "", txHash: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMax = this.getMax.bind(this);
 
  }
  handleChange(event) {
    this.setState({amount: event.target.value});
  }

  async getMax(event){
    console.log("getMax activated");
    let max = await this.props.getUserBalance(this.props.address);
    max-=9;
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
    <div>
      <h4 className="component-title">Withdraw funds (User): </h4>
      <button onClick ={this.getMax} className="btn btn-helper">
        Withdraw Max Value</button>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Amount</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            onChange={this.handleChange}
            value={this.state.amount}
            required
          />
          <label name = "txHash">txHash: {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Withdraw From Marketplace" />
        </div>
      </form>
    </div>
  );
}
}
