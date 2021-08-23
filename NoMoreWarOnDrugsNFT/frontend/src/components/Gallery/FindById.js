import React from "react";


export class FindById extends React.Component{

    constructor(props){
        super(props);
        this.state = {tokenId: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({tokenId: event.target.value});
        console.log("changing id");
      }

      async handleSubmit(event) {
        event.preventDefault();
        const currentUrl = window.location.href;
        let i = currentUrl.lastIndexOf('gallery/');
        const url=currentUrl.substr(0,i)+"gallery/1/"+this.state.tokenId;
        //const url="localhost/300/gallery/1/"+this.state.tokenId;
        console.log(url)
        window.location.href = url;
        console.log("submitting",this.props.findById );
      }

    render(){
        return(
            <div className="find-by-id-container" >
                <form className="find-by-id" onSubmit={this.handleSubmit}>
                    <label>Id: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="id"
                        onChange={this.handleChange}
                        required
                    />
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Search" />
                    </div>
                </form>
            </div>
        )
        
    }
}