import React from "react";

export class SetPriceForMinting extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: "",  price: "", royaltyAddress:"", txHash: ""};

    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRoyaltyAddress = this.handleChangeRoyaltyAddress.bind(this);

    this.priceInput = React.createRef();
    this.idInput = React.createRef();
    this.royaltyAddressInput = React.createRef();
 
  }
  handleChangePrice(event) {
    this.setState({price: event.target.value});
  }

  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  handleChangeRoyaltyAddress(event) {
    this.setState({royaltyAddress: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    let price;
    if(this.state.price>999){
      price = (this.state.price).toString()+"000000000000000000";
    }else{
      price = (this.state.price*1000000000000000000).toString();
    }
    const tokenId = this.state.tokenId;
    const royaltyAddress = this.state.royaltyAddress;
    console.log(" aaa price: ",price," tokenId: ",tokenId,"royalty address",royaltyAddress);

    console.log("method: ",this.props.setPriceForMinting);
    const tx =  await this.props.setPriceForMinting(price , tokenId, royaltyAddress);
    console.log(tx);
    if (tx.error){
        this.setState({txHash: tx.error});
    }else{
        this.setState({txHash: tx.hash});
        this.priceInput.current.value = "";
        this.idInput.current.value = "";
        this.royaltyAddressInput.current.value= "";
    }
  }

  render(){
  return (
    <div>
      <h4 className="component-title">Set the minting price of NFT</h4>
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
            type="text"
            name="id"
            onChange={this.handleChangeId}
            ref={this.idInput}
            required
          />
          <label>Royalty Recepient Address: </label>
          <input
            className="form-control"
            type="text"
            name="royaltyAddress"
            onChange={this.handleChangeRoyaltyAddress}
            ref={this.royaltyAddressInput}
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
