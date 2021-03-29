import React from "react";

export class IdToOwnerIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ", index: NaN, owner: " "};

    this.handleChangeOwner = this.handleChangeOwner.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChangeOwner(event) {
    this.setState({owner: event.target.value});
  }

  handleChangeIndex(event) {
    this.setState({index: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const owner = this.state.owner;
    const index = this.state.index;


    if (owner && index) {
      this.setState({tokenId: "..."})
      const tokenId =  await this.props.idToOwnerIndex(owner, index);
      console.log("got id: ",tokenId);
      if(tokenId._hex){
        this.setState({tokenId: parseInt(tokenId)});
      }else{
        this.setState({tokenId: "Invalid input."});
      }
    }
  
  }

  render(){
  return (
    <div>
      <h4>Id of NfT by Index in Owner List </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Owner address: </label>
          <input
            className="form-control"
            type="text"
            name="Owner"
            onChange={this.handleChangeOwner}
            required
          />
          <label>Index: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="Index"
            onChange={this.handleChangeIndex}
            required
          />
          <label name = "index-Id">Id: {this.state.tokenId}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get Id" />
        </div>
      </form>
    </div>
  );
}
}
