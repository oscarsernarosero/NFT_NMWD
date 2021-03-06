
import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { PaginationNFTs } from "./PaginationNFTs";
import { MarketInfo } from "./MarketInfo";
import { ContractAddresses } from "./ContractAddresses";
import { GoToMint } from "./GoToMint";
import "../../style/gallery.css";
import {
  useParams
} from "react-router-dom";

export function Gallery(props){

    
  let { page,id } = useParams();
  console.log(id);
  if (page===undefined)  page=1;
  if (id===undefined)  id=0;

  const [launched,setLaunched] = useState(false);
  
  const chrome = navigator.userAgent.indexOf("Chrome") > -1;
    return (
      <div className="gallery">
        <Helmet>
                    <meta charSet="utf-8" />
                    <title>Gallery SWD NFTs</title>
                    <meta name="description" content="Buy and sell your SWD NFTs in our native marketplace."/>
                    <link rel="canonical" href="https://www.stopthewarondrugs.com/#/gallery/" />
                </Helmet>
        
        <div className={chrome? "not-visible":""}>
                <h4 style={{padding:"1vw", color:"yellow"}}>WARNING: This browser may cause unexpected behaviours in this app. We recommend to use Google Chrome or Brave for desktop.</h4>
              </div>

          
          <div >

          <PaginationNFTs
          page={page}
          findId={id}
          mywallet = {false}
          {...props}
          />
          <GoToMint/>
          <MarketInfo/>
          
          <ContractAddresses/>
          </div>
        </div>
        );
    
  
    
    
}