import React from "react";
import "../../style/imageNFT.css";
import { NFTOnly } from "./NFTOnly";


import {
    useParams
  } from "react-router-dom";


export function NFTOnlyContainer(props){

    let { id } = useParams();
    if (id===undefined) return (<div> No Id given</div>);
    console.log(id);

  return(<div>
            <NFTOnly
                  id={id} 
                  {...props}
              />
          </div>);
  
    
}
