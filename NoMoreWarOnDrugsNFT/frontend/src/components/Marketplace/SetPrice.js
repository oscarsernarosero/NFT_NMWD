import React from "react";

export class SetPrice extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: "",  price: "", txHash: ""};

    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.priceInput = React.createRef();
    this.idInput = React.createRef();
 
  }
  handleChangePrice(event) {
    this.setState({price: event.target.value});
  }

  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const price = (+this.state.price*1000000000000000000).toString();
    const tokenId = this.state.tokenId;
    console.log("price: ",price," tokenId: ",tokenId);

    
    const tx =  await this.props.setPrice(price , tokenId);
    console.log(tx);
    if (tx.error){
        this.setState({txHash: tx.error});
    }else{
        this.setState({txHash: tx.hash});
        this.priceInput.current.value = "";
        this.idInput.current.value = "";
    }
  }

  render(){
  return (
    <div>
      <h4 className="component-title">Set the price for your NFT</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>price (ETH): </label>
          <input
            className="form-control"
            type="number"
            name="price"
            step="0.00001"
            onChange={this.handleChangePrice}
            ref={this.priceInput}
            required
          />
          <label>NFT Id: </label>
          <input
            className="form-control"
            type="number"
            
            name="id"
            onChange={this.handleChangeId}
            ref={this.idInput}
            required
          />
          <label >Tx Hash: {this.state.txHash}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Set Price" />
        </div>
      </form>
    </div>
  );
}
}
