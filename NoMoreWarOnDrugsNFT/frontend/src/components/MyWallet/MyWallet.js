import React from "react";
import { MyNFTs } from "./MyNFTs";
import {
    useParams
  } from "react-router-dom";
  import { Helmet } from "react-helmet";

export function MyWallet(props){

    let { page } = useParams();
    if (page===undefined)  page=1;

    console.log("from mywallet. network:",props.network);

  
    return (
        <div >
            <Helmet>
                    <title>SWD Wallet</title>
                    <meta name="description" content="Manage your SWD NFTs here. Set the message, change price, transfer, etc."/>
                </Helmet>
            <MyNFTs 
                page={page}
                {...props}
            />
            
        </div>
        );
    
}