import React, {useState} from "react";
import { ForMinting } from "./ForMinting";
import { ContractAddresses } from "../Gallery/ContractAddresses"
import { Countdown } from "../Generics/Countdown";
import "../../style/gallery.css";
import {
  useParams
} from "react-router-dom";
import { Helmet } from "react-helmet";

export function Mint(props){

    let { page,id } = useParams();
    if (page===undefined)  page=1;
    if (id===undefined)  id=0;

    const [launched,setLaunched] = useState(false);

    const chrome = navigator.userAgent.indexOf("Chrome") > -1;
    console.log("Mint NETWROK:",props.network);
      return (
        <div className="gallery">
          <Helmet>
                    <title>Mint SWDs</title>
                    <meta name="description" content="Mint fresh SWD NFTs, and take one of the most important NFTs \
                    in the market with you today. They come with the opportunity of immortalizing your thoughts \
                    in the Ethereum blockchain."/>
                </Helmet>
          <Countdown deadline={"October, 22, 2021, 17:00"} setLaunched={setLaunched}/>
           <div className={chrome? "not-visible":"gallery"}>
                <h4 style={{padding:"1vw", color:"yellow"}}>WARNING: This browser may cause unexpected behaviours in this app. We recommend to use Google Chrome or Brave for desktop.</h4>
              </div>
          <div className={(!launched)? "not-visible":"gallery"}>
          {/* <div className="gallery"> */}
            <ForMinting
              page={page}
              findId={id}
              mywallet = {false}
              {...props}
              />
              <ContractAddresses/>
              </div>
          </div>
          );
    
}