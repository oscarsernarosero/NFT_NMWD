import React from "react";
import { ethers } from "ethers";

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

    const rawPrice = await this.props.getPrice(tokenId);
    console.log("rawPrice: ",rawPrice);

    //const price = "0" + rawPrice.toString(16);
    const price = rawPrice._hex;
    console.log("price: ",price);

    const abi = [
    "function purchaseToken(uint _tokenId) external payable"
    ];
    const iface = new ethers.utils.Interface(abi);
    const data = iface.encodeFunctionData("purchaseToken", [tokenId]);
    
    const params = [
        {
        from: this.props.to,
        to: this.props.marketPlaceAddress,
        value: price, 
        data: data
        },
    ];
    await window.ethereum
        .request({
        method: 'eth_sendTransaction',
        params,
        })
        .then((result) => {
        console.log(result);
        //this.idInput.current.value = "";
        // The result varies by by RPC method.
        // For example, this method will return a transaction hash hexadecimal string on success.
        })
        .catch((error) => {
        console.log(error);
        // If the request fails, the Promise will reject with an error.
        });
    
  
  }

  render(){
  return (
    <div>
      <h4 className="component-title">Purchase NFT with ID: </h4>
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
          <input className="btn btn-primary" type="submit" value="BUY" />
        </div>
      </form>
    </div>
  );
}
}
