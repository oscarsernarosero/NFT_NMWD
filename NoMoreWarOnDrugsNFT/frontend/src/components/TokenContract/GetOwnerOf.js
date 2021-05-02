import React from "react";

export class GetOwnerOf extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ", owner: " "};

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
      this.setState({owner: "..."})
      const owner =  await this.props.getOwnerOf(tokenId);
      console.log("got owner: ",owner);
      if(owner.error){
        this.setState({owner: "Invalid Id."});
      }else{
        this.setState({owner: owner});
      }
    }
  
  }

  render(){
  return (
    <div>
      <h4>Owner address by NFT Id: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Id: </label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="Index"
            onChange={this.handleChange}
            required
          />
          <label name = "index-Id">owner: {this.state.owner}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Check Owner" />
        </div>
      </form>
    </div>
  );
}
}
