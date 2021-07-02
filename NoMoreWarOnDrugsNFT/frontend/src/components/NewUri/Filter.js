import React from "react";
const fs = require("fs");
const CONST = require('./uri_constants');
const TOPIC = CONST.TOPIC;
const LANGUAGE = CONST.LANGUAGE;

  export class Filter extends React.Component{

    constructor(props){
      super(props);
      this.state = { langauge:-1,
                    artist:"",
                    topics:[],
                    generalTopics:[],
                    peopleTopics:[],
                    countryTopics:[]
                };
  
      this.handleLanguage = this.handleLanguage.bind(this);
      this.handleArtist = this.handleArtist.bind(this);
      this.handleTopics = this.handleTopics.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
        
      this.languageInput = React.createRef();
      this.artistInput = React.createRef();
      this.topicsInput = React.createRef();

      console.log(this.state);
    }

    handleLanguage(event) {
        this.setState({langauge: event.target.value});
      }

    handleArtist(event) {
        this.setState({artist: event.target.value});
        }

    handleTopics(event) {
        let checked = this.state.topics;
        if(event.target.checked){
            checked.push(event.target.value);
        }else{
            checked = checked.filter( value => value != event.target.value );
        }
        this.setState({topics:checked});
        }

render(){

    return (
        <div>
        <h4 className="component-title">Create A New URI</h4>
        <form
            onSubmit={this.handleSubmit} >
            <div className="form-group">
            <label>Name Of The NFT: </label>
            <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.handleName}
                ref={this.nameInput}
                required
            />
            
            <div className="form-group">
            <label>Language The NFT Is In: </label>
            <select 
                value={this.state.languageInput} 
                onChange={this.handleLanguage}
                className="form-control"
                required
                >   
                    <option value={-1}>Select</option>
                    {LANGUAGE.map((language, value)=>{
                        return <option value={value}>{language}</option>
                    })}
                </select>
            </div>
            
            <div className="form-group">
            <label>Artist: </label>
            <input
                className="form-control"
                type="text"  
                name="artist"
                onChange={this.handleArtist}
                ref={this.artistInput}
                required
            />
            </div>
            
            </div>
            <div className="form-group">
            <label>Topics: </label>
                    {Object.entries(TOPIC).map((obj,index) => {
                        return  <div>
                                <input 
                                type="checkbox" 
                                name="topic" 
                                value={obj[1]}
                                onChange={this.handleTopics}
                                /> 
                                {obj[0]}
                                </div>
                    })
                    }
                
            </div>
            
            
            <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Create URI" />
            </div>
        </form>
        </div>
    );
    }
}
