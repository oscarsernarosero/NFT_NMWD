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
                //src="http://4.bp.blogspot.com/-Yq3Q5ex8chU/T0uKnKUhjcI/AAAAAAAAAEM/cDfeYY9cYQA/s1600/ebla_clay_tablet.png"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Stele_of_Vultures_detail_01-transparent.png/440px-Stele_of_Vultures_detail_01-transparent.png"
                alt="image2"
                title="Be part of history"
                text={<p>
                    Stop-the-War-on-Drugs is not just an NFT project. It is a world-wide movement that gets stronger by the day.
                    SWD, moreover, is pioneering in the crypto space regarding political activism. In other words, there are not just NFTs;
                    These are also tokens that represent your believes and your values. 
                    
                    <br/><br/>
                   But that is not it.
                    By getting one or more of the Stop-The-War-On-Drugs NFTs, you are not only supporting a YouTube channel and the artists who create 
                        these art works, but you are also <b>immortalizing yourself in the Ethereum blockchain for ever!</b> These NFTs offer the opportunity
                        of writting a message against the nefarious <b>War On Drugs</b> directly into the blockchain without the possibility of being modified or deleted <b>ever!!! </b>
                        We, together, will pioneer and make history in the blockchain political activism to end this horrendous <b>War On Drugs</b> that takes away our freedoms and rights, 
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
                    One of the main goals of this project is to give visibility to some artists from the very same places that 
                    <b> War On Drugs</b> has done the most harm. In other words, artists from cities like Cali, Colombia or Culiacán, México.
                    People who suffer -through their skin- the cartels brutality and government corruption in their daily lives --the natural 
                    outcome of prohibition. We want to make the pain into art. 
                    <br/>
                    <br/>
                
                    But that's not it.
                    This NFT project is one of the first ones to implement ERC2907 which aims to support royalties for
                    NFT creators. SWD has a standard 8.00% royalty for all NFTs, and, as a rule of thumb, SWD grants a percentage of 
                    the total amount of royalties collected to <b>all</b> the artists who collaborate in the art creation. This percentage 
                    can be somewhere between 15% and 50% depending on the preference of payment of the artist. To know more about
                    this, you can check out our artist partner program. 
                </p>
                }       

            />
            </div>
        );
    }
}