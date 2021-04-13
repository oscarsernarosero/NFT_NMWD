import React from "react";

export class MarketPlaceApprove extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ", address: " ", msg: ""};

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  handleChangeAddress(event) {
    this.setState({address: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const tokenId = this.state.tokenId;
    const address = this.state.address;

    const tx =  await this.props.marketPlaceApprove(address, tokenId);
    console.log("aproving...");
    if(tx.error){
    this.setState({msg: "Invalid Input."});
    console.log("failed.");
    }else{
    this.setState({msg: "Aproval successfull"});
    console.log("success!");
    }
    
  
  }

  render(){
  return (
    <div>
      <h4>Approve address to transact NFT by Id: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Id: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="id"
            onChange={this.handleChangeId}
            required
          />
          <label>Address to approve: </label>
          <input
            className="form-control"
            type="text"
            step="1"
            name="address"
            onChange={this.handleChangeAddress}
            required
          />
          <label name = "index-Id"> {this.state.msg}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Approve" />
        </div>
      </form>
    </div>
  );
}
}
