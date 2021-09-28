import React from "react";
import "../../style/channel.css"
import { ChannelIndex } from "./ChannelIndex";
import { ChannelPost } from "./ChannelPost";
import {
    useParams
  } from "react-router-dom";


export function Channel(props){

    const content = require("./Content");

    let { post } = useParams();
    console.log(post);
    if (post===undefined)  post="before_1914";

    return(
        <div className="channel">
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