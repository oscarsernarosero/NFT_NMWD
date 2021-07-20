import React from "react";
import './Home.css'

import { LeftImage } from "./LeftImage";
import { RightImage } from "./RightImage";
import { Buttons } from "./Buttons";

export class Home extends React.Component {
    render(){
        return (
            <div className="home-container">
            <LeftImage
                src="http://4.bp.blogspot.com/-Yq3Q5ex8chU/T0uKnKUhjcI/AAAAAAAAAEM/cDfeYY9cYQA/s1600/ebla_clay_tablet.png"
                alt="image2"
                title="Be part of history"
                text={<p>
                    By getting one or more of the Stop-The-War-On-Drugs NFTs, you are not only supporting a YouTube channel and the artists who create 
                        these art works, but you are also immortalizing yourself in the Ethereum blockchain for ever! These NFTs offer the opportunity
                        of writting a message against the nefarious <b>War On Drugs</b> directly onto the blockchain without the possibility of being modified or deleted <b>ever!!! </b>
                        We, together, will pioneer in the blockchain political activism to end this horrendous <b>War On Drugs</b> that takes away our freedoms and rights, 
                        and you will be able to prove to your kids and grandkids that you were among those pioneers of this noble cause. What are you waiting for?
                    </p>
                }            
            />
            <Buttons/>
            <RightImage
                src="https://news.artnet.com/app/news-upload/2015/07/boteroEscobar-768x1024.jpg"
                alt="image2"
                title="You are supporting artists and my Youtube channel"
                text={<p >
                    One of the main goals of this project is to give visibility to some not-mainstream  artists from the very same places that 
                    <b> War On Drugs</b> has done the most harm. In other words, artists from cities like Cali, Colombia or Culiacán, México.
                    People who suffer -through their skin- the cartels brutality and government corruption in their daily lives. 
                    <br/>
                    <br/>
                
                    But that's not it.
                    This NFT project is one of the first ones to implement EIP2907. This EIP aims to support royalties for
                    NFT creators. NWD has a standard 8.00% royalty on all NFTs, and, as a rule of thumb, NWD grants a percentage of 
                    the total amount of royalties collected to all the artists who collaborate in the art creation. This percentage 
                    can be somewhere between 15% and 50% depending on the preference of payment of the artist. To know more about
                    this, you can check out our artist partner program. 
                </p>
                }       

            />
            </div>
        );
    }
}