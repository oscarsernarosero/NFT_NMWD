import React from "react";

export class UpdateNMWDContract extends React.Component{

  constructor(props){
    super(props);
    this.state = {address: " "};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChange(event) {
    this.setState({address : event.target.value});
  }


  async handleSubmit(event) {
    event.preventDefault();
    const address  = this.state.address ;
    const uri =  await this.props.updateNMWDContract(address);
    console.log("contract address setup with ",address);
    if (uri.error){
        console.log(uri.error);
    }
    }
  

  render(){
  return (
    <div>
      <h4>Setup the market place with the address of NoMoreWarOnDrugs' contract: </h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        
          <label>Contract Address: </label>
          <input
            className="form-control"
            type="text"
            step="1"
            name="address"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Setup NFT Contract" />
        </div>
      </form>
    </div>
  );
}
}
