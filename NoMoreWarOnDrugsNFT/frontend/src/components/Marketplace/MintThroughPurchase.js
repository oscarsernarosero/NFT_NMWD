import React from "react";
import { ethers } from "ethers";

  export class MintThroughPurchase extends React.Component{

    constructor(props){
      super(props);
      this.state = {tokenId: "", to: "", txHash: "",
                      royaltyRecipient: 0, royaltyValue: 0};
  
      this.handleChangeId = this.handleChangeId.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeRoyaltyRecipient = this.handleChangeRoyaltyRecipient.bind(this);
      this.handleChangeRoyaltyValue = this.handleChangeRoyaltyValue.bind(this);
  
      this.idInput = React.createRef();
      this.royaltyRecepientInput = React.createRef();
      this.royaltyValueInput = React.createRef();
   
    }

    handleChangeId(event) {
      this.setState({tokenId: event.target.value});
    }

    handleChangeRoyaltyRecipient(event) {
      this.setState({royaltyRecepient: event.target.value});
    }

    handleChangeRoyaltyValue(event) {
      this.setState({royaltyValue: event.target.value});
    }

    async handleSubmit(event) {
      event.preventDefault();
      const tokenId = this.state.tokenId;
      let royaltyRecepient = this.state.royaltyRecepient;
      const royaltyValue = (+this.state.royaltyValue).toFixed(2) * 100;

      console.log(tokenId);
      console.log(this.props);

      if(royaltyRecepient==0){
        royaltyRecepient="0x0000000000000000000000000000000000000000"
      }

      const rawPrice = await this.props.getPrice(tokenId);
      console.log("rawPrice: ",rawPrice);

      //const price = "0" + rawPrice.toString(16);
      const price = rawPrice._hex;
      console.log("price: ",price);

      const abi = [
        "function mintThroughPurchase(address _to, uint _tokenId, address royaltyRecipient, uint256 royaltyValue) external payable"
      ];
      const iface = new ethers.utils.Interface(abi);
      const data = iface.encodeFunctionData("mintThroughPurchase", [this.props.to, tokenId, royaltyRecepient, royaltyValue]);
        
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
            this.royaltyRecepientInput.value = "";
            this.royaltyValueInput.value = "";
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
          <h4 className="component-title">Mint through purchase</h4>
          <h5 className="component-subtitle">Owner: {this.props.owner}</h5>
          <form
            onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label>Token Id: </label>
              <input
                className="form-control"
                type="text"
                name="Id"
                onChange={this.handleChangeId}
                ref={this.idInput}
                required
              />
            </div>
            <div className="form-group">
              <label>Royalty address</label>
              <input className="form-control" type="text" name="alias" ref={this.royaltyRecepientInput} onChange={this.handleChangeRoyaltyRecipient} required />
              <label>Royalty Value (Percentage. MAX 2 decimals)</label>
              <input className="form-control" type="number" step="0.01" name="royaltyValue" ref={this.royaltyValueInput}  onChange={this.handleChangeRoyaltyValue} required /> 
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
