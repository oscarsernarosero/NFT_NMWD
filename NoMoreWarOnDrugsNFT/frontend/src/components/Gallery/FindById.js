import React from "react";
import "../../style/find-by-id.css"
import { BiSearchAlt } from "react-icons/bi";
import { IoCaretDown } from "react-icons/io5";
import { IoCaretUp } from "react-icons/io5";


export class FindById extends React.Component{

    constructor(props){
        super(props);
        this.state = {tokenId: "",lookUpByIdVisible:false}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.show = this.show.bind(this);
    }

    show(event){
        event.preventDefault();
        this.setState({lookUpByIdVisible: !this.state.lookUpByIdVisible});
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
                <button onClick={this.show} className="find-by-id-button">
                <BiSearchAlt style={{verticalAlign:"middle",fontSize:"1.2rem"}}/>&nbsp;Look Up By Id&nbsp;
                {this.state.lookUpByIdVisible? <IoCaretUp style={{verticalAlign:"middle"}}/>:
                                            <IoCaretDown style={{verticalAlign:"middle"}}/>}
                </button>
                <div className={this.state.lookUpByIdVisible? "find-by-id-form": "dont-show"}>
                    <div className="form-container">
                        <label>
                            Id: &nbsp;
                        </label>
                        <input
                            className="find-by-id-input"
                            type="text"
                            name="id"
                            onChange={this.handleChange}
                            required
                        />
                     </div>
                    <div>
                        <input className="find-by-id-submmit" type="submit" value="Search" />
                    </div>
                    </div>
                </form>
                
            </div>
        )
        
    }
}