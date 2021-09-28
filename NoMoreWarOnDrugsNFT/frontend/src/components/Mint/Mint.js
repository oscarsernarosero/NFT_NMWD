import React from "react";
import { ForMinting } from "./ForMinting";
import "../../style/gallery.css";
import {
  useParams
} from "react-router-dom";

export function Mint(props){

    let { page,id } = useParams();
    if (page===undefined)  page=1;
    if (id===undefined)  id=0;

    const chrome = navigator.userAgent.indexOf("Chrome") > -1;
  
      return (
        <div className="gallery">
           <div className={chrome? "not-visible":"gallery"}>
                <h4 style={{padding:"1vw", color:"yellow"}}>WARNING: This browser may cause unexpected behaviours in this app. We recommend to use Google Chrome or Brave for desktop.</h4>
              </div>
          <ForMinting
            page={page}
            findId={id}
            mywallet = {false}
            {...props}
            />
            </div>
          );
    
}