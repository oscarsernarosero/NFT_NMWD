import React from "react";

  export class TransferOwnership extends React.Component{

  constructor(props){
    super(props);
    this.state = {to : " ", txHash : " "};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChange(event) {
    this.setState({to : event.target.value});
  }


  async handleSubmit(event) {
    event.preventDefault();
    const to  = this.state.to ;

    this.setState({txHash : "..."})
    const txHash  =  await this.props.transferOwnership(to);
    console.log("got txHash : ",txHash );
    if(txHash.error){
        this.setState({txHash : "Invalid Id."});
    }else{
        this.setState({txHash : txHash.hash });
    }
    
  
  }

  render(){
  return (
    <div>
      <h4 className="component-title">Trnasfer The Ownership Of The NoMoreWarOnDrugs Contract: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>to address: </label>
          <input
            className="form-control"
            type="text"
            step="1"
            name="to"
            onChange={this.handleChange}
            required
          />
          <label name = "index-Id">txHash: {this.state.txHash }</label>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Transfer Ownership" />
        </div>
      </form>
    </div>
  );
}
}

