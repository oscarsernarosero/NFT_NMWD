import React from "react";

export class WithdrawUserFunds extends React.Component{

  constructor(props){
    super(props);
    this.state = {amount: " ", txHash: " "};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChange(event) {
    this.setState({amount: event.target.value});
  }


  async handleSubmit(event) {
    event.preventDefault();
    const amount = this.state.amount;


    
    this.setState({txHash: "..."});
    console.log(this.props);
    const txHash =  await this.props.withdrawUserFunds(amount);
    console.log("got txHash: ",txHash);
    if(txHash.error){
    this.setState({txHash: "Oops! Somethig went wrong. Try again later."});
    }else{
    this.setState({txHash: txHash});
    }
  }

  render(){
  return (
    <div>
      <h4>Owner Alias by NFT Id: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Id: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            onChange={this.handleChange}
            required
          />
          <label name = "txHash">txHash: {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get Owner Alias" />
        </div>
      </form>
    </div>
  );
}
}
