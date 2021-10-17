import React from "react";
import { MyNFTs } from "./MyNFTs";
import {
    useParams
  } from "react-router-dom";

export function MyWallet(props){

    let { page } = useParams();
    if (page===undefined)  page=1;

    console.log("from mywallet. network:",props.network);

  
    return (
        <div >
            <MyNFTs 
                page={page}
                {...props}
            />
            
        </div>
        );
    
}