import React from "react";

export class GetPrice extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: "", price: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChange(event) {
    this.setState({tokenId: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const tokenId = this.state.tokenId;

    this.setState({price: "..."})
    const price =  await this.props.getPrice(tokenId);
    console.log("got price: ",parseInt(price._hex));
    if(price.error){
      this.setState({price: "Invalid Id."});
    }else{
      this.setState({price: parseInt(price._hex)});
    }
  }

  render(){
  return (
    <div>
      <h4 className="component-title">Get The Price Of The NFT With Id: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Id: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="id"
            onChange={this.handleChange}
            required
          />
          <label name = "price">Price: {(this.state.price)/1000000000000000000} ETH</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get Price" />
        </div>
      </form>
    </div>
  );
}
}
