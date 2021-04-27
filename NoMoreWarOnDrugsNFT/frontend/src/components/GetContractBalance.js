import React from "react";

export class GetContractBalance extends React.Component{

  constructor(props){
    super(props);
    this.state = {balance: " ", address: props.address};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async handleSubmit(event) {
    event.preventDefault();

    //this.setState({balance: "..."});
    console.log(this.props);
    const balance =  await this.props.getContractBalance();
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
      <h4>Consult the MarketPlace's Balance: </h4>
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
