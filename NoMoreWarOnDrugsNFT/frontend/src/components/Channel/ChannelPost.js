import React from "react";
import "../../style/channel.css"
import {Content } from "./ContentEn"
import { VideoRight } from "../Generics/VideoRight";


export function ChannelPost(props){
    console.log(Content);
    console.log(props);

    return(
        
        <div className="blog-post">
           
            
            
             <div className="blog-post-title" >{props.post.title}</div>
             <div className="blog-post-description" >{props.post.description}</div>
             {props.group==="Playlists"?
                Object.entries(props.post.content).map((key, index) => {
                                            return  <div key={index}>
                                                
                                                <VideoRight 
                                                            data = {key}
                                                        />
                                                
                                                        
                                                    </div>
                                        })
                                      :
                                      props.post.text
                                      
                                      }

            
        </div>
    )
}