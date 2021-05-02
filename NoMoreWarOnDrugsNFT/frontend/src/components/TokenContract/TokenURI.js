import React from "react";

export class TokenURI extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ", uri: " "};

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
      this.setState({uri: "..."})
      const uri =  await this.props.tokenURI(tokenId);
      console.log("got uri: ",uri);
      if(uri.error){
        this.setState({uri: "Invalid Id."});
      }else{
        this.setState({uri: uri});
      }
    }
  
  }

  render(){
  return (
    <div>
      <h4>URI of NFT by Id: </h4>
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
          <label name = "index-Id">URI: {this.state.uri}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get URI" />
        </div>
      </form>
    </div>
  );
}
}
