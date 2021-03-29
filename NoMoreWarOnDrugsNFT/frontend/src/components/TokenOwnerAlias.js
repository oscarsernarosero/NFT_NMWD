import React from "react";

export class TokenOwnerAlias extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ", ownerAlias: " "};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChange(event) {
    this.setState({tokenId: event.target.value});
  }


  async handleSubmit(event) {
    event.preventDefault();
    const tokenId = this.state.tokenId;


    if (tokenId) {
      this.setState({ownerAlias: "..."});
      console.log(this.props);
      const ownerAlias =  await this.props.tokenOwnerAlias(tokenId);
      console.log("got ownerAlias: ",ownerAlias);
      if(ownerAlias.error){
        this.setState({ownerAlias: "Invalid Id."});
      }else{
        this.setState({ownerAlias: ownerAlias});
      }
    }
  
  }

  render(){
  return (
    <div>
      <h4>Owner Alias by NFT Id: </h4>
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
          <label name = "onwerAlias">ownerAlias: {this.state.ownerAlias}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get Owner Alias" />
        </div>
      </form>
    </div>
  );
}
}
