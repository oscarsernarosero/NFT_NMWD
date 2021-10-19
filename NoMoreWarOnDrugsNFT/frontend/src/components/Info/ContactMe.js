import React from "react";
import "./Home.css";

import"../../i18n/text";
import { Translate } from 'react-i18nify';
import discord  from '../../images/discord-logo-png-32874.png';
import twitter from "../../images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"

export class ContactMe extends React.Component{

    constructor(props){
        super(props);

        this.twitterEs = this.twitterEs.bind(this);
        this.twitterEn = this.twitterEn.bind(this);
        this.discordChannel = this.discordChannel.bind(this);
    }
       
    twitterEs(){
        window.open('https://twitter.com/guerra_farsa', '_blank').focus();
    }

    twitterEn(){
        window.open('https://twitter.com/nomorewarondrug', '_blank').focus();
    }

    discordChannel(){
        window.open('https://discord.gg/ExnxG3qs', '_blank').focus();
    }

    render(){
        return(
            <div className="contact-me-container">
                <div className="contact-me-filter">
                    <div className="contact-me-title"><Translate value='home.contact_me'/>
                    </div>
                        nft@stopthewarondrugs.com
                    </div>
                    <div className="contact-us-buttons">
                        <button className="social-media-button" onClick={this.twitterEn}>
                            <img src={twitter} width="60px"/>
                        </button>
                        <button className="social-media-button" onClick={this.discordChannel}>
                        <img src={discord} width="70px"/>
                        </button>
                        <button className="social-media-button" onClick={this.twitterEs}>
                        <img src={twitter} width="60px" />
                        </button>
                    </div>
                    <div className="contact-us-legends">
                        <div className="social-media-legend" >
                        Twitter English
                        </div>
                        <div className="social-media-legend">
                            Discord Channel
                        </div>
                        <div className="social-media-legend">
                            Twitter español
                        </div>
                    </div>
                    
                </div>
        );
    }
}