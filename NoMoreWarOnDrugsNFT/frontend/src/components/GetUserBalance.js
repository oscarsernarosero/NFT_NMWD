import React from "react";

export class GetUserBalance extends React.Component{

  constructor(props){
    super(props);
    this.state = {balance: " ", address: props.address};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async handleSubmit(event) {
    event.preventDefault();

    console.log(this.props);
    const balance =  await this.props.getUserBalance(this.state.address);
    console.log("got balance: ",parseInt(balance._hex));
    if(balance.error){
    this.setState({balance: "Oops! Somethig went wrong. Try again later."});
    }else{
    this.setState({balance: parseInt(balance._hex)/1000000000000000000});
    }
  }

  render(){
  return (
    <div>
      <h4>Consult your balance held in the MarketPlace: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label name = "balance">Balance: {this.state.balance}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get My Balance" />
        </div>
      </form>
    </div>
  );
}
}
