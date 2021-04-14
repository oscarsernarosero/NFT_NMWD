import React from "react";
import { ethers } from "ethers";

  export class MintThroughPurchase extends React.Component{

    constructor(props){
      super(props);
      this.state = {tokenId: "", uri: "", msg: "",to: "", txHash: ""};
  
      this.handleChangeId = this.handleChangeId.bind(this);
      this.handleChangeUri = this.handleChangeUri.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.idInput = React.createRef();
      this.uriInput = React.createRef();
   
    }

    handleChangeId(event) {
      this.setState({tokenId: event.target.value});
    }

    handleChangeUri(event) {
      this.setState({uri: event.target.value});
    }

    async handleSubmit(event) {
      event.preventDefault();
      const tokenId = this.state.tokenId;
      const uri = this.state.uri;

      console.log(tokenId, uri);
      console.log(this.props);

      const rawPrice = await this.props.getPrice(tokenId);
      console.log("rawPrice: ",rawPrice);

      //const price = "0" + rawPrice.toString(16);
      const price = rawPrice._hex;
      console.log("price: ",price);

      const abi = [
        "function mintThroughPurchase(address _to, uint _tokenId, string memory _uri) external payable"
      ];
      const iface = new ethers.utils.Interface(abi);
      const data = iface.encodeFunctionData("mintThroughPurchase", [this.props.to, tokenId, uri]);
        
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
            this.idInput.current.value = "";
            this.uriInput.current.value = "";
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
          <h4>Mint through purchase</h4>
          <h5>Owner: {this.props.owner}</h5>
          <form
            onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label>Token Id: </label>
              <input
                className="form-control"
                type="number"
                step="1"
                name="Id"
                onChange={this.handleChangeId}
                ref={this.idInput}
                required
              />
            </div>
            <div className="form-group">
              <label>Uri</label>
              <input className="form-control" type="text" name="uri" ref={this.uriInput} onChange={this.handleChangeUri} required />
              <label name = "response"> {this.state.txHash}</label>
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Mint" />
            </div>
          </form>
        </div>
      );
     }
}
