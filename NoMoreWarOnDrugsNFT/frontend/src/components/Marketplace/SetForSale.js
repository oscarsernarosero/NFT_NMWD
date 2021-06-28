import React from "react";

export class SetForSale extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: "",  forSale: "", txHash: ""};

    this.handleChangeForSale = this.handleChangeForSale.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.idInput = React.createRef();
 
  }
  handleChangeForSale(event) {
    this.setState({forSale: !!event.target.value});
  }

  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const forSale = this.state.forSale;
    const tokenId = this.state.tokenId;
    console.log("forSale: ",forSale," tokenId: ",tokenId);

    
    const tx =  await this.props.setForSale(tokenId, forSale);
    console.log(tx);
    if (tx.error){
        this.setState({txHash: tx.error});
    }else{
        this.setState({txHash: tx.hash});
        this.idInput.current.value = "";
    }
        
    
  
  }

  render(){
  return (
    <div>
      <h4 className="component-title">Turn On/Off the sale of your NFT (it is off by default!)</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>for sale? 
          <select value={this.state.forSale} onChange={this.handleChangeForSale}
          className="select-menu">
            <option value="true">Yes! Sell it.</option>
            <option value="">No! I want to keep this one.</option>
          </select>
        </label>
        <label>NFT Id: </label>
          <input
            className="form-control"
            type="text"
            name="id"
            onChange={this.handleChangeId}
            ref={this.idInput}
            required
          />
          <label >Tx Hash: {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Set" />
        </div>
      </form>
    </div>
  );
}
}
