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
  
    return (
      <div className="gallery">

        <ForMinting
          page={page}
          findId={id}
          mywallet = {false}
          {...props}
          />
         
          </div>

          

        );
    
}