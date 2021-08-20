import React from "react";
import { ForMinting } from "./ForMinting";
import "../../style/gallery.css";
import {
  useParams
} from "react-router-dom";

export function Mint(props){

    let { page } = useParams();
    if (page===undefined)  page=1;
  
    return (
      <div className="gallery">

        <ForMinting
          page={page}
          mywallet = {false}
          {...props}
          />
         
          </div>

          

        );
    
}