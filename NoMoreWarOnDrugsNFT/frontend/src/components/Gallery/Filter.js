import React from "react";
import { CgFilters } from "react-icons/cg";
import { IoCaretDown } from "react-icons/io5";
import { IoCaretUp } from "react-icons/io5";
import '../../style/filter.css';
import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';
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
        const artists=[];
        const topics = DB.topic;

        Object.entries(DB.artist).map(([key,value], index) => {
            artists.push(key);
        });
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

      this.state = { language:-1,
                    artists:artists, selectedArtists:[],
                    selectedTopics:[],
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

    async handleLanguage(event) {
        console.log("about to set language : ", event.target.value);
        await this.setState({language: event.target.value});
        console.log("language : ", this.state.language);
        
      }

    async handleArtist(event) {
        let checked = this.state.selectedArtists;
      if(event.target.checked){
          checked.push(event.target.value);
      }else{
          checked = checked.filter( value => value !== event.target.value );
      }
      await this.setState({selectedArtists:checked});
      console.log("this.state.selectedArtists",this.state.selectedArtists);
      console.log("ids of first artist",DB.artist[this.state.selectedArtists[0]]);

        }

    async handleTopics(event) {
        let checked = this.state.selectedTopics;
      if(event.target.checked){
          checked.push(event.target.value);
      }else{
          checked = checked.filter( value => value !== event.target.value );
      }
      await this.setState({selectedTopics:checked});
      console.log("this.state.selectedTopics",this.state.selectedTopics);
      console.log("FIRST TOPIC value",TOPIC[this.state.selectedTopics[0]]);
      console.log("ids of first topic",DB.topic[TOPIC[this.state.selectedTopics[0]]]);
    }


    show(event){
        event.preventDefault();
        this.setState({topicVisible: !this.state.topicVisible});
    }

    handleSubmit(event){
        event.preventDefault();
        const byTopics = this.state.selectedTopics.map( (literal) => TOPIC[literal] );
        console.log("byTopics",byTopics);
        console.log("this.state.selectedArtists",this.state.selectedArtists);
        console.log("this.state.language",this.state.language);
        this.props.applyFilter(byTopics,this.state.selectedArtists, this.state.language);
    }
render(){

    return (
        <div className="filter-container">
        <form
            onSubmit={this.handleSubmit} >
            <button onClick={this.show} className="topic-button">
                <CgFilters style={{verticalAlign:"middle",fontSize:"1.2rem"}}/>&nbsp;{<Translate value='filter.title'/>} &nbsp;
                {this.state.topicVisible? <IoCaretUp style={{verticalAlign:"middle"}}/>:
                                            <IoCaretDown style={{verticalAlign:"middle"}}/>}
                </button>
            <div className={this.state.topicVisible? "": "dont-show"}>
                <div className="filter-menu">
                  <div className="filter-category">
                      <label className="topic-title">{<Translate value='filter.option1'/>}:</label>
                      
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

                  <div className="filter-category">
                  <label className="topic-title">{<Translate value='filter.option2'/>}:</label>
                    <div className={this.state.topicVisible? "": "dont-show"}>
                      <div className="topic-options">
                              {this.state.peopleTopics.map((person,index) => {
                                  return  <div key={index}>
                                          <input 
                                          type="checkbox" 
                                          name="topic" 
                                          value={person}
                                          onChange={this.handleTopics}
                                          /> 
                                          {person}
                                          </div>
                              })
                              }
                        </div>
                      </div>
                    </div>

                    <div className="filter-category">
                    <label className="topic-title">{<Translate value='filter.option3'/>}:</label>
                      <div className={this.state.topicVisible? "": "dont-show"}>
                              <div className="topic-options">
                                      {this.state.countryTopics.map((country, index) => {
                                          return  <div key={index}>
                                                  <input 
                                                  type="checkbox" 
                                                  name="topic" 
                                                  value={country}
                                                  onChange={this.handleTopics}
                                                  /> 
                                                  {country}
                                                  </div>
                                      })
                                      }
                              </div>
                      </div>
                  </div> 

                  <div className="filter-category">
                  <label className="topic-title">{<Translate value='filter.option4'/>}:</label>
                      <div className={this.state.topicVisible? "": "dont-show"}>
                              <div className="topic-options">
                                      {this.state.generalTopics.map((topic, index) => {
                                          return  <div key={index}>
                                                  <input 
                                                  type="checkbox" 
                                                  name="topic" 
                                                  value={topic}
                                                  onChange={this.handleTopics}
                                                  /> 
                                                  {topic}
                                                  </div>
                                      })
                                      }
                              </div>
                      </div>
                  </div> 

                  <div className="filter-category">
                    <label className="topic-title">{<Translate value='filter.option5'/>}:</label>
                      <div className={this.state.topicVisible? "": "dont-show"}>
                              <div className="topic-options">
                                      {this.state.artists.map((artist, index) => {
                                          return  <div key={index}>
                                                  <input 
                                                  type="checkbox" 
                                                  name="topic" 
                                                  value={artist}
                                                  onChange={this.handleArtist}
                                                  /> 
                                                  {artist}
                                                  </div>
                                      })
                                      }
                              </div>
                      </div>
                  </div> 

                  <div className="filter-category">
                  <label>{<Translate value='filter.option6'/>}: </label>
                  <select 
                    value={this.state.languageInput} 
                    onChange={this.handleLanguage}
                    className=""
                    required
                    >   
                        <option value={-1}>All</option>
                        {LANGUAGE.map((language, index)=>{
                            return <option value={index} key={index}>{language}</option>
                        })}
                    </select>
                  </div>
              </div>
              <button type="submit">{<Translate value='filter.apply'/>}</button>
             </div>
             
        </form>
        </div>
    );
    }
}
