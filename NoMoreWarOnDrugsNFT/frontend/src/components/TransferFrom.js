import React from "react";

export class TransferFrom extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ", owner: " ", to: " ", txHash: "No transactions yet."};

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleChangeOwner = this.handleChangeOwner.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toInput = React.createRef();
    this.idInput = React.createRef();
    this.ownerInput = React.createRef();
 
  }
  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  handleChangeTo(event) {
    this.setState({to: event.target.value});
  }

  handleChangeOwner(event) {
    this.setState({owner: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const tokenId = this.state.tokenId;
    const owner = this.state.owner;
    const to = this.state.to;

    const tx =  await this.props.safeTransferFrom(owner, to, tokenId);
    console.log(tx);
    if(tx.error){
        this.setState({txHash: tx.error});
        console.log("failed.");
    }else{
        this.setState({txHash: tx.hash});
        console.log("success!", tx.hash);
        this.toInput.current.value = "";
        this.idInput.current.value = "";
        this.ownerInput.current.value = "";
    }
    
  
  }

  render(){
  return (
    <div>
      <h4>Transfer Someone else's NFT (You have to be approved first)</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Send NFT with Id:  </label>
          <input
            className="form-control"
            type="number"
            name="id"
            onChange={this.handleChangeId}
            ref={this.idInput}
            required
          />
        
          <label>Send To Address:  </label>
          <input
            className="form-control"
            type="text"
            name="to"
            onChange={this.handleChangeTo}
            ref={this.toInput}
            required
          />
          <label>From (owner address): </label>
          <input
            className="form-control"
            type="text"
            step="1"
            name="owner"
            onChange={this.handleChangeOwner}
            ref={this.ownerInput}
            required
          />
          <label name = "index-Id"> {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Send Approved NFT" />
        </div>
      </form>
    </div>
  );
}
}
