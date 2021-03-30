import React from "react";

export class SetTokenMessage extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: "",  msg: "", txHash: ""};

    this.handleChangeMsg = this.handleChangeMsg.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.msgInput = React.createRef();
    this.idInput = React.createRef();
 
  }
  handleChangeMsg(event) {
    this.setState({msg: event.target.value});
  }

  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const msg = this.state.msg;
    const tokenId = this.state.tokenId;
    console.log("msg: ",msg," tokenId: ",tokenId);

    if (msg && tokenId) {
        const tx =  await this.props.setTokenMessage(tokenId, msg );
        console.log(tx);
        if (tx.error){
            this.setState({txHash: tx.error});
        }else{
            this.setState({txHash: tx.hash});
            this.msgInput.current.value = "";
            this.idInput.current.value = "";
        }
        
    }
  
  }

  render(){
  return (
    <div>
      <h4>Set the message for your NFT</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Message: </label>
          <input
            className="form-control"
            type="text"
            name="msg"
            onChange={this.handleChangeMsg}
            ref={this.msgInput}
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
          <input className="btn btn-primary" type="submit" value="Set Message" />
        </div>
      </form>
    </div>
  );
}
}
