import React from "react";
import '../../style/filter.css';
const fs = require("fs");
const DB = require("../../localDB/attributes.json");
const CONST = require('./uri_constants');

const TOPIC = CONST.TOPIC;
const LANGUAGE = CONST.LANGUAGE;

export class Filter extends React.Component{

    constructor(props){
      super(props);

        const generalTopics=[];
        const peopleTopics=[];
        const countryTopics=[];
        const drugKind=[];
        const topics = DB.topic;

        console.log("topics",topics);
        let reversedTOPIC = {};
        Object.entries(TOPIC).map(([value,key], index) => {
            reversedTOPIC[key]= value;
        });
        console.log("reversedTOPIC", reversedTOPIC);
        const nTopics = Object.entries(topics).map((str_topic) => {
            return parseInt(str_topic);
        });
        console.log("nTopics",nTopics);
        nTopics.map( (ntopic) => {
            if(ntopic<20){
                drugKind.push(reversedTOPIC[ntopic]);
            }else if(ntopic>=20 && ntopic <40){
                generalTopics.push(reversedTOPIC[ntopic]);
            }else if(ntopic>=40 && ntopic <60){
                peopleTopics.push(reversedTOPIC[ntopic]);
            }else if(ntopic>=60 && ntopic <100){
                countryTopics.push(reversedTOPIC[ntopic]);
            }else{
                throw("corrupted database");
            }
        });
        console.log("drugKind",drugKind);
        console.log("generalTopics",generalTopics);
        console.log("peopleTopics",peopleTopics);
        console.log("countryTopics",countryTopics);

      this.state = { langauge:-1,
                    artist:"",
                    topics:[],
                    generalTopics:generalTopics,
                    peopleTopics:peopleTopics,
                    countryTopics:countryTopics,
                    drugTopic:drugKind,
                    topicVisible: false
                };
  
      this.handleLanguage = this.handleLanguage.bind(this);
      this.handleArtist = this.handleArtist.bind(this);
      this.handleTopics = this.handleTopics.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.show = this.show.bind(this);
        
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

    show(event){
        event.preventDefault();
        this.setState({topicVisible: !this.state.topicVisible});
    }

    handleSubmit(){

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
                        return <option value={value} key={value}>{language}</option>
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
            
            <div>
                <button onClick={this.show} className="topic-button">Drugs: </button>
                <div className={this.state.topicVisible? "": "dont-show"}>
                        <div className="topic-options">
                                {this.state.drugTopic.map((drug, index) => {
                                    return  <div key={index}>
                                            <input 
                                            type="checkbox" 
                                            name="topic" 
                                            value={drug}
                                            onChange={this.handleTopics}
                                            /> 
                                            {drug}
                                            </div>
                                })
                                }
                        </div>
                </div>
            </div> 

            <div>
            <button onClick={this.show}>all: </button>
            <div className={this.state.topicVisible? "": "dont-show"}>
            <div className="topic-options">
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
            </div>
            </div>
            
            
            <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Create URI" />
            </div>
        </form>
        </div>
    );
    }
}
