import React from "react";

//export function Mint({ mint, owner}) {
  export class Mint extends React.Component{

    constructor(props){
      super(props);
      this.state = {tokenId: "", uri: "", msg: "", ownerAlias: "" ,to: "", txHash: ""};
  
      this.handleChangeId = this.handleChangeId.bind(this);
      this.handleChangeTo = this.handleChangeTo.bind(this);
      this.handleChangeOwnerAlias = this.handleChangeOwnerAlias.bind(this);
      this.handleChangeUri = this.handleChangeUri.bind(this);
      this.handleChangeMsg = this.handleChangeMsg.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.toInput = React.createRef();
      this.idInput = React.createRef();
      this.ownerAliasInput = React.createRef();
      this.msgInput = React.createRef();
      this.uriInput = React.createRef();
   
    }

    handleChangeId(event) {
      this.setState({tokenId: event.target.value});
    }
  
    handleChangeTo(event) {
      this.setState({to: event.target.value});
    }
  
    handleChangeOwnerAlias(event) {
      this.setState({ownerAlias: event.target.value});
    }

    handleChangeUri(event) {
      this.setState({uri: event.target.value});
    }
  
    handleChangeMsg(event) {
      this.setState({msg: event.target.value});
    }

    async handleSubmit(event) {
      event.preventDefault();
      const tokenId = this.state.tokenId;
      const ownerAlias = this.state.ownerAlias;
      const to = this.state.to;
      const uri = this.state.uri;
      const msg = this.state.msg;

      console.log(to, tokenId, uri, ownerAlias, msg)
      
      console.log(this.props);
      console.log(this.props.mint)
      const tx =  await this.props.mint(to, tokenId, uri, ownerAlias, msg);
      console.log(tx);
      if(tx.error){
          this.setState({txHash: tx.error});
          console.log("failed.");
      }else{
          this.setState({txHash: "Last minting succeded with tx hash: "+tx.hash});
          console.log("success!", tx.hash);
          this.toInput.current.value = "";
          this.idInput.current.value = "";
          this.ownerAliasInput.current.value = "";
          this.uriInput.current.value = "";
          this.msgInput.current.value = "";
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
              <label>Alias</label>
              <input className="form-control" type="text" name="alias" ref={this.ownerAliasInput} onChange={this.handleChangeOwnerAlias} required />
              <label>Message</label>
              <input className="form-control" type="text" name="msg" ref={this.msgInput}  onChange={this.handleChangeMsg} required />
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
