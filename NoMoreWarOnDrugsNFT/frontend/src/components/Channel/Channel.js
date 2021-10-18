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

    let { post } = useParams();
    console.log(post);
    if (post===undefined)  post="before_1914";

    return(
        <div className="channel">
            <Helmet>
                    <title>Channel</title>
                    <meta name="description" content="Learn more about why we must stop the war on drugs"/>
                </Helmet>
            <div className="index" >
              <ChannelIndex
              categories={content}
              />
            </div>
            <div className="blog-content" >
            <ChannelPost 
                post={content.Playlists[post]}
                //post={content.Playlists.before_1914}
            
            />
            </div>
        </div>
    )
}