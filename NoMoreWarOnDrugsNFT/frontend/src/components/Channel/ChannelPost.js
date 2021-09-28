import React from "react";
import "../../style/channel.css"
import {Playlists } from "./Content"
import { VideoRight } from "../Generics/VideoRight";


export function ChannelPost(props){
    console.log(Playlists);

    return(
        <div className="blog-post">
            <div className="blog-post-title" >{props.post.title}</div>
            <div className="blog-post-description" >{props.post.description}</div>

            {Object.entries(props.post.content).map((key, index) => {
                                          return  <div key={index}>
                                              
                                                    <VideoRight 
                                                        data = {key}
                                                    />
                                                  </div>
                                      })
                                      }

            
        </div>
    )
}