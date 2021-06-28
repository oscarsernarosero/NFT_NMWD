import React from "react";

export class GetForSale extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: "",  forSale: ""};

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.idInput = React.createRef();
 
  }

  handleChangeId(event) {
    this.setState({tokenId: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const tokenId = this.state.tokenId;
    console.log(" tokenId: ",tokenId);

    
    const _forSale =  await this.props.getForSale(tokenId);
    console.log(_forSale);
    if (_forSale.error){
        this.setState({forSale: _forSale.error});
    }else{
        this.setState({forSale:  _forSale.toString()});
        this.idInput.current.value = "";
    }
  }

  render(){
  return (
    <div>
      <h4 className="component-title">is this NFT for sale? </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>NFT Id: </label>
          <input
            className="form-control"
            type="text"
            name="id"
            onChange={this.handleChangeId}
            ref={this.idInput}
            required
          />
          <label >For Sale: {this.state.forSale}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get" />
        </div>
      </form>
    </div>
  );
}
}
