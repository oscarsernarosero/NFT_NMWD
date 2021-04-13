import React from "react";

export class Purchase extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: "", txHash: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChange(event) {
    this.setState({tokenId: event.target.value});
  }

  async handleSubmit(event) {

    event.preventDefault();
    const tokenId = this.state.tokenId;

    this.setState({txHash: "..."})
    const txHash =  await this.props.purchaseToken(tokenId);
    console.log("got txHash: ",txHash);
    if(txHash.error){
    this.setState({txHash: "Invalid Id."});
    }else{
    this.setState({txHash: txHash});
    }
    
  
  }

  render(){
  return (
    <div>
      <h4>Purchase NFT with ID: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Id: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="id"
            onChange={this.handleChange}
            required
          />
          <label name = "index-Id">txHash: {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get URI" />
        </div>
      </form>
    </div>
  );
}
}
