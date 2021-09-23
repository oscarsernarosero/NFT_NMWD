import React from "react";
import './Home.css'

import { LeftImage } from "./LeftImage";
import { RightImage } from "./RightImage";
import { Buttons } from "./Buttons";
import"../../i18n/text";
import { translate, localize } from 'react-i18nify';
import { Translate, Localize } from 'react-i18nify';

export class Home extends React.Component {

    
    render(){
        return (
            <div className="home-container">
            <LeftImage
                //src="http://4.bp.blogspot.com/-Yq3Q5ex8chU/T0uKnKUhjcI/AAAAAAAAAEM/cDfeYY9cYQA/s1600/ebla_clay_tablet.png"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Stele_of_Vultures_detail_01-transparent.png/440px-Stele_of_Vultures_detail_01-transparent.png"
                alt="image2"
                title={translate('home.first.title')}
                text={<p>
                    <Translate value='home.first.para1' />
                    
                    <br/><br/>
                    <Translate value='home.first.para2' />
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