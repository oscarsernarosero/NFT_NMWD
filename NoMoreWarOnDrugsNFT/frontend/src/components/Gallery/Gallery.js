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
  
    return (
      <div className="gallery">
          <PaginationNFTs
          page={page}
          findId={id}
          mywallet = {false}
          {...props}
          />
         
          </div>

          

        );
    
}