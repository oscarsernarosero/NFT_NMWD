import React from "react";

export class TokenMessage extends React.Component{

  constructor(props){
    super(props);
    this.state = {tokenId: " ", message: " "};

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
      this.setState({message: "..."})
      console.log(this.props);
      const message =  await this.props.tokenMessage(tokenId);
      console.log("got message: ",message);
      if(message.error){
        this.setState({message: "Invalid Id."});
      }else{
        this.setState({message: message});
      }
    }
  
  }

  render(){
  return (
    <div>
      <h4>Message by NFT Id: </h4>
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
          <label name = "index-Id">message: {this.state.message}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Get Message" />
        </div>
      </form>
    </div>
  );
}
}
