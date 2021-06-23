import { isAddress } from "ethers/lib/utils";
import React from "react";

//export function Mint({ mint, owner}) {
  export class Mint extends React.Component{

    constructor(props){
      super(props);
      this.state = {tokenId: "", uri: "", to: "", txHash: "", 
                    royaltyRecipient: 0, royaltyValue: 0};
  
      this.handleChangeId = this.handleChangeId.bind(this);
      this.handleChangeTo = this.handleChangeTo.bind(this);
      this.handleChangeRoyaltyRecipient = this.handleChangeRoyaltyRecipient.bind(this);
      this.handleChangeUri = this.handleChangeUri.bind(this);
      this.handleChangeRoyaltyValue = this.handleChangeRoyaltyValue.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.toInput = React.createRef();
      this.idInput = React.createRef();
      this.royaltyRecepientInput = React.createRef();
      this.royaltyValueInput = React.createRef();
       this.uriInput = React.createRef();
   
    }

    handleChangeId(event) {
      this.setState({tokenId: event.target.value});
    }
  
    handleChangeTo(event) {
      this.setState({to: event.target.value});
    }
  
    handleChangeRoyaltyRecipient(event) {
      this.setState({royaltyRecepient: event.target.value});
    }

    handleChangeUri(event) {
      this.setState({uri: event.target.value});
    }
  
    handleChangeRoyaltyValue(event) {
      this.setState({royaltyValue: event.target.value});
    }

    async handleSubmit(event) {
      event.preventDefault();
      const tokenId = this.state.tokenId;
      const royaltyRecepient = this.state.royaltyRecepient;
      const to = this.state.to;
      const uri = this.state.uri;
      const royaltyValue = this.state.royaltyValue.toFixed(2) * 100;

      console.log(to, tokenId, uri);
      
      console.log(this.props);
      console.log(this.props.mint)
      const tx =  await this.props.mint(to, tokenId, uri, royaltyRecepient, royaltyValue);
      console.log(tx);
      if(tx.error){
          this.setState({txHash: tx.error});
          console.log("failed.");
      }else{
          this.setState({txHash: "Last minting succeded with tx hash: "+tx.hash});
          console.log("success!", tx.hash);
          this.toInput.current.value = "";
          this.idInput.current.value = "";
           this.royaltyRecepientInput.current.value = "";
          this.uriInput.current.value = "";
          this.royaltyValueInput.current.value = "";
      }
      
    }

    render(){
      
      return (
        <div>
          <h4>Mint</h4>
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
              <label>Recipient address</label>
              <input className="form-control" type="text" name="to" ref={this.toInput} onChange={this.handleChangeTo} required />
            </div>
            <div className="form-group">
              <label>Uri</label>
              <input className="form-control" type="text" name="uri" ref={this.uriInput} onChange={this.handleChangeUri} required />
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
