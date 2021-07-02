import React from "react";
import "../../style/filter.css";
const fs = require("fs");
const DB = require("../../localDB/attributes.json");
const CONST = require('./uri_constants');
const TOPIC = CONST.TOPIC;
const LANGUAGE = CONST.LANGUAGE;


  export class NewUri extends React.Component{

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

     
  
      this.state = {description:"", name:"", langauge:-1,
                    imageCID:"",artist:"",artist_webpage:"",
                    selectedTopics:[],royatyPct:8.00, 
                    generalTopics:generalTopics,
                    peopleTopics:peopleTopics,
                    countryTopics:countryTopics,
                    artists:artists, selectedArtists:[],
                    drugTopic:drugKind,
                    royaltyAddress:"0x0x44E2c3503572B9bb359DA5b38c7B057c95D7CD01", 
                    external_url:"warondrugsisasham.eth.link",
                    pinataSecret:"", pinataKey:""};
  
      this.handleDescription = this.handleDescription.bind(this);
      this.handleLanguage = this.handleLanguage.bind(this);
      this.handleImageCID= this.handleImageCID.bind(this);
      this.handleArtist = this.handleArtist.bind(this);
      this.handleArtistWebpage = this.handleArtistWebpage.bind(this);
      this.handleTopics = this.handleTopics.bind(this);
      this.handleRoyaltyPct = this.handleRoyaltyPct.bind(this);
      this.handleRoyaltyAddress = this.handleRoyaltyAddress.bind(this);
      this.handleExternalUrl = this.handleExternalUrl.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handlePinataSecret = this.handlePinataSecret.bind(this);
      this.handlePinataKey = this.handlePinataKey.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.show = this.show.bind(this);
        
      this.descriptionInput = React.createRef();
      this.languageInput = React.createRef();
      this.imageCIDInput = React.createRef();
      this.artistInput = React.createRef();
      this.artistWebpageInput = React.createRef();
      this.topicsInput = React.createRef();
      this.royaltyPctInput = React.createRef();
      this.royaltyAddressInput = React.createRef();
      this.externalUrlInput = React.createRef();
      this.nameInput = React.createRef();
      this.pinataSecretInput = React.createRef();
      this.pinataKeyInput = React.createRef();

      console.log(this.state);
    }

    handleDescription(event) {
      this.setState({description: event.target.value});
    }

    handleLanguage(event) {
      this.setState({langauge: event.target.value});
    }

    handleImageCID(event) {
      this.setState({imageCID: event.target.value});
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }

    async handleArtist(event) {
      let checked = this.state.selectedArtists;
      if(event.target.checked){
          checked.push(event.target.value);
      }else{
          checked = checked.filter( value => value != event.target.value );
      }
      await this.setState({selectedArtists:checked});
      console.log("this.state.selectedArtists",this.state.selectedArtists);
      console.log("ids of first artist",DB.artist[this.state.selectedArtists[0]]);

    }

    handleArtistWebpage(event) {

    this.setState({artist_webpage: event.target.value});
    }

    async handleTopics(event) {
      let checked = this.state.selectedTopics;
      if(event.target.checked){
          checked.push(event.target.value);
      }else{
          checked = checked.filter( value => value != event.target.value );
      }
      await this.setState({selectedTopics:checked});
      console.log("this.state.selectedTopics",this.state.selectedTopics);
      console.log("FIRST TOPIC value",TOPIC[this.state.selectedTopics[0]]);
      console.log("ids of first topic",DB.topic[TOPIC[this.state.selectedTopics[0]]]);
    }

    handleRoyaltyPct(event) {
    this.setState({royatyPct: event.target.value});
    }

    handleRoyaltyAddress(event) {
    this.setState({royaltyAddress: event.target.value});
    }

    handleExternalUrl(event) {
    this.setState({external_url: event.target.value});
    }

    handlePinataSecret(event) {
      this.setState({pinataSecret: event.target.value});
    }

    handlePinataKey(event) {
      this.setState({pinataKey: event.target.value});
    }

    show(event){
      event.preventDefault();
      this.setState({topicVisible: !this.state.topicVisible});
  }

    async handleSubmit(event) {
        event.preventDefault();

        const fs = require("browserify-fs");
        require('dotenv').config();
        const contractsDir = __dirname+"/../uris";
        const pinataSDK = require('@pinata/sdk');
        const pinata = pinataSDK(this.state.pinataKey, this.state.pinataSecret);


        if(this.state.selectedTopics.length==0){
            throw("topics must be an array with at least 1 topic");
        }
        if( this.state.language !== LANGUAGE.EN  &&  this.state.language !== LANGUAGE.ES ){
            throw("There are only 2 languages availabe: EN and ES");
        }

        const uri = {
            description: this.state.description,
            external_url: this.state.external_url,
            image: "ipfs://"+this.state.imageCID,
            name: this.state.name,
            attributes: {
                artist: this.state.artist,
                webpage: this.state.artist_webpage,
                topics: this.state.selectedTopics,
                language: this.state.language
            },
            royalties: {
                pctValue: this.state.royaltyPct,
                address: this.state.royaltyAddress
            }
        }

        //saving the file into ../uris dir.
        const safe_name = this.state.name.replace(/ /g,"_");
        const json_uri = JSON.stringify(uri, undefined, 0);
        fs.writeFile( contractsDir+"/"+safe_name+".json",json_uri);

        pinata.testAuthentication().then((result) => {
            //handle successful authentication here
            console.log(result);
        }).catch((err) => {
            //handle error here
            console.log(err);
        });

        const body = { uri };
        const options = {
          pinataMetadata: {
            name: safe_name
          },
            pinataOptions: {
                cidVersion: 1
            }
        };
        pinata.pinJSONToIPFS(body, options).then((result) => {
            //handle results here
            console.log("from pinning: ",result);
        }).catch((err) => {
            //handle error here
            console.log(err);
        });
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
            </div>
            <div className="form-group">
              <label>Description Of The NFT: </label>
              <input
                className="form-control"
                type="text"
                name="description"
                onChange={this.handleDescription}
                ref={this.descriptionInput}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Image CID: </label>
              <input
                className="form-control"
                type="text"  
                name="imageCID"
                onChange={this.handleImageCID}
                ref={this.imageCIDInput}
                required
              />
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
            <div className="form-group">
              <label>Artist Webpage: </label>
              <input
                className="form-control"
                type="text"  
                name="artistWebpage"
                onChange={this.handleArtistWebpage}
                ref={this.artistWebpageInput}
              />
            </div>
            <button onClick={this.show} className="topic-button">Filter </button>
            <div className={this.state.topicVisible? "": "dont-show"}>
                <div className="filter-menu">
                  <div className="filter-category">
                      <label className="topic-title">By drug kind:</label>
                      
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
                  <label className="topic-title">By historical character:</label>
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
                    <label className="topic-title">By country reference:</label>
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
                  <label className="topic-title">By general topic:</label>
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
                    <label className="topic-title">By artist:</label>
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
                  <label>Language The NFT Is In: </label>
                  <select 
                    value={this.state.languageInput} 
                    onChange={this.handleLanguage}
                    className=""
                    required
                    >   
                        <option value={-1}>All</option>
                        {LANGUAGE.map((language, value)=>{
                            return <option value={value}>{language}</option>
                        })}
                    </select>
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
