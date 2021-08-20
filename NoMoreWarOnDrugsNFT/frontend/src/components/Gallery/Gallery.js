import React from "react";
import { PaginationNFTs } from "./PaginationNFTs";
import "../../style/gallery.css";
import {
  useParams
} from "react-router-dom";

export function Gallery(props){

    
  let { page } = useParams();
  if (page===undefined)  page=1;
  
    return (
      <div className="gallery">
          <PaginationNFTs
          page={page}
          mywallet = {false}
          {...props}
          />
         
          </div>

          

        );
    
}