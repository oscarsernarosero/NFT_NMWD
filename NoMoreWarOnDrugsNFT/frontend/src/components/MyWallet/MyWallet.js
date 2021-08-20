import React from "react";
import { MyNFTs } from "./MyNFTs";
import {
    useParams
  } from "react-router-dom";

export function MyWallet(props){

    let { page } = useParams();
    if (page===undefined)  page=1;
  
    return (
        <div >
            <MyNFTs 
                page={page}
                {...props}
            />
            
        </div>
        );
    
}