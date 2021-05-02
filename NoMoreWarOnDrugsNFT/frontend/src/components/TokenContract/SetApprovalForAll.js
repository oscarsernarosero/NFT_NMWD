import React from "react";

export class SetApprovalForAll extends React.Component{

  constructor(props){
    super(props);
    this.state = {operator: " ", msg: ""};

    this.handleChangeOperator = this.handleChangeOperator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  
  handleChangeOperator(event) {
    this.setState({operator: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const operator = this.state.operator;

    const tx =  await this.props.setApprovalForAll(operator, true);
    console.log("aproving...");
    if(tx.error){
    this.setState({msg: "Failed."});
    console.log("failed.");
    }else{
    this.setState({msg: "Aproval successfull for all NFTs"});
    console.log("success!");
    }
    
  
  }

  render(){
  return (
    <div>
      <h4>Approve operator to transact all your NFTs: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          
          <label>Address to approve: </label>
          <input
            className="form-control"
            type="text"
            step="1"
            name="operator"
            onChange={this.handleChangeOperator}
            required
          />
          <label name = "index-Id"> {this.state.msg}</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Approve All" />
        </div>
      </form>
    </div>
  );
}
}
