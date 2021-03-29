import React from "react";

export  class TokenByIndex extends React.Component{

  constructor( props ){
    super(props);
    this.state = {tokenId: " ", index: NaN};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({index: event.target.value});
  }

  async handleSubmit(event) {
    alert('An index was submitted: ' + this.state.index);
    event.preventDefault();
    const index = this.state.index;

    if (index) {
      this.setState({tokenId: "..."})
      const tokenId = await this.props.tokenByIndex(index);
      console.log("got id..", tokenId);
      if(tokenId._hex){
        this.setState({tokenId: parseInt(tokenId._hex)})
      }else{
        this.setState({tokenId: tokenId.error})
      }
      
    }
  }

  render(){
    return (
      <div>
        <h4>Id of NFT by index</h4>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>Token index: </label>
            <input
              className="form-control"
              type="number"
              step="1"
              name="Index"
              required
              onChange={this.handleChange}
            />
            <label name = "index-Id">Id: {this.state.tokenId}</label>
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Get Id" />
          </div>
        </form>
      </div>
    );
  };
}