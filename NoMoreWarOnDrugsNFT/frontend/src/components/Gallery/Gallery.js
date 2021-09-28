import React from "react";
import { PaginationNFTs } from "./PaginationNFTs";
import "../../style/gallery.css";
import {
  useParams
} from "react-router-dom";

export function Gallery(props){

    
  let { page,id } = useParams();
  console.log(id);
  if (page===undefined)  page=1;
  if (id===undefined)  id=0;

  const chrome = navigator.userAgent.indexOf("Chrome") > -1;
    return (
      <div className="gallery">
        <div className={chrome? "not-visible":"gallery"}>
                <h4 style={{padding:"1vw", color:"yellow"}}>WARNING: This browser may cause unexpected behaviours in this app. We recommend to use Google Chrome or Brave for desktop.</h4>
              </div>
          <PaginationNFTs
          page={page}
          findId={id}
          mywallet = {false}
          {...props}
          />
        </div>
        );
    
  
    
    
}