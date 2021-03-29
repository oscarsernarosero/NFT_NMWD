import React from "react";

  export class OwnerToIds extends React.Component{

    constructor( props ){
      super(props);
      this.state = {tokenId: " ", index: NaN, owner: " "};
  
      this.handleChange = this.handleChangeIndex.bind(this);
      this.handleChange = this.handleChangeOwner.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeIndex(event) {
      this.setState({index: event.target.value});
    }

    handleChangeOwner(event) {
      this.setState({owner: event.target.value});
    }
  
    async handleSubmit(event) {
      event.preventDefault();
      const owner = this.state.owner;
      const index = this.state.index;

      if (owner && index) {
        this.setState({tokenId: parseInt(await this.props.ownerToIds(owner, index))});
        console.log("got id..", this.state.tokenId);
      }
    }

    render(){
      return (
        <div>
          <h4>Index of NfT</h4>
          <form
            onSubmit={this.handleSubmit()}   >
            <div className="form-group">
              <label>Owner address xxx: </label>
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
              <label name = "index-Id"> {this.state.tokenId}</label>
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Mint" />
            </div>
          </form>
        </div>
      );
  }
}