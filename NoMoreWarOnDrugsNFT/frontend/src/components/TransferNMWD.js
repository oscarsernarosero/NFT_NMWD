import React from "react";

export class TransferNMWD extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ",  to: " ", txHash: " No transactions yet."};

    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toInput = React.createRef();
    this.idInput = React.createRef();
 
  }
  handleChangeTo(event) {
    this.setState({to: event.target.value});
  }

  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const to = this.state.to;
    const tokenId = this.state.tokenId;
    console.log("to: ",to," tokenId: ",tokenId);

    if (to && tokenId) {
        const tx =  await this.props.safeTransferFrom(this.props.owner, to, tokenId);
        console.log(tx);
        if (tx.error){
            this.setState({txHash: tx.error});
        }else{
            this.setState({txHash: tx.hash});
            this.toInput.current.value = "";
            this.idInput.current.value = "";
        }
        
    }
  
  }

  render(){
  return (
    <div>
      <h4>Transfer Your NFT</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Send To Address: </label>
          <input
            className="form-control"
            type="text"
            name="to"
            onChange={this.handleChangeTo}
            ref={this.toInput}
            required
          />
          <label>NFT Id: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="id"
            onChange={this.handleChangeId}
            ref={this.idInput}
            required
          />
          <label >Tx Hash: {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Transfer This NFT" />
        </div>
      </form>
    </div>
  );
}
}
