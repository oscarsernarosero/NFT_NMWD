import React from "react";

export class WithdrawFromContract extends React.Component{

  constructor(props){
    super(props);
    this.state = {amount: "", txHash: "", to: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMax = this.getMax.bind(this);
    this.getMyAddress = this.getMyAddress.bind(this);
 
  }
  handleChange(event) {
    this.setState({amount: event.target.value});
  }

  handleChangeTo(event) {
    this.setState({to: event.target.value});
  }

  getMyAddress(){
    this.setState({to: this.props.myAddress});
  }

  async getMax(event){
      let max = await this.props.getContractBalance();
      max-=500;
      console.log("max: ",max);
      this.setState({amount: parseInt(max)});
  }


  async handleSubmit(event) {
    event.preventDefault();
    const amount = this.state.amount;


    
    this.setState({txHash: "..."});
    console.log(this.props);
    const txHash =  await this.props.withdrawFromContract(this.state.to, amount.toString());
    console.log("got txHash: ",txHash);
    if(txHash.error){
    this.setState({txHash: "Oops! Somethig went wrong. Try again later."});
    }else{
    this.setState({txHash: txHash.hash, amount: "", to: ""});
    }
  }

  render(){
  return (
    <div>
      <h4>Withdraw funds from the MarketPlace (Only marketplace owner) </h4>
      
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Amount: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            onChange={this.handleChange}
            required
            value={this.state.amount}
          />
          <button onClick ={this.getMax} type="button">All available funds</button>
          <br></br>
          <label>To: </label>
          <input
            className="form-control"
            type="text"
            step="1"
            name="amount"
            onChange={this.handleChangeTo}
            required
            value={this.state.to}
          />
          <button onClick ={this.getMyAddress} type="button">My address</button>
          <br></br>
          <label name = "txHash">txHash: {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Withdraw" />
        </div>
      </form>
    </div>
  );
}
}
