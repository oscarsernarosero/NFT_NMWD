import React from "react";
import "../../style/channel.css";
import"./ContentEn";
import"./ContentEs";
import { ChannelIndex } from "./ChannelIndex";
import { ChannelPost } from "./ChannelPost";
import {
    useParams
  } from "react-router-dom";
  import { getLocale} from 'react-i18nify';
  import { Helmet } from "react-helmet";

export function Channel(props){

    var content;

    const language = getLocale();

    if (language=="en") content = require("./ContentEn");
    else                content = require("./ContentEs");

    console.log("group beofre");
    let { group,post } = useParams();
    console.log("post",post);
    console.log("group",group);
    if (post===undefined) post="intro";
    if (group==="0")    group="Playlists";
    else if (group===undefined||group==="1") group="blog";

    console.log("grouop contect",content.Content["blog"]);
    

    return(
        <div className="channel">
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Channel</title>
                    <meta name="description" content="Learn more about why we must stop the war on drugs"/>
                    <link rel="canonical" href="https://www.stopthewarondrugs.com/#/channel/" />
                </Helmet>
            <div className="index" >
              <ChannelIndex
              categories={content.Content}
              />
            </div>
            <div className="blog-content" >
            <ChannelPost 
                post={content.Content[group][post]}
                group={group}
            
            />
            </div>
        </div>
    )
}