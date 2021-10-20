import React from "react";
import './Home.css'

import { LeftImage } from "./LeftImage";
import { RightImage } from "./RightImage";
import { Buttons } from "./Buttons";
import { ContactMe } from "./ContactMe";
import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';
import { Helmet } from "react-helmet";

export class Home extends React.Component {

    
    render(){
        
        return (
            <div className="home-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>StopTheWarOnDrugs Home</title>
                    <meta name="description" content="StopTheWarOnDrugs.ETH NFT is a crypto project in Ethereum \
                    that speaks up against the war on drugs through art and blockchain."/>
                    <link rel="canonical" href="https://www.stopthewarondrugs.com/" />
                </Helmet>
            <LeftImage
                //src="http://4.bp.blogspot.com/-Yq3Q5ex8chU/T0uKnKUhjcI/AAAAAAAAAEM/cDfeYY9cYQA/s1600/ebla_clay_tablet.png"
                src="https://images.pexels.com/photos/3199399/pexels-photo-3199399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="image2"
                title={<Translate value='home.first.title'/>}
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
                title={<Translate value='home.second.title'/>}
                text={<p >
                     <Translate value='home.second.para1' />
                    <br/>
                    <br/>
                    <Translate value='home.second.para2' />
                </p>
                }   
            />
            <LeftImage
                src="https://images.pexels.com/photos/3779014/pexels-photo-3779014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="image2"
                title={<Translate value='home.artist_partner.title'/>}
                text={ <Translate value='home.artist_partner.text' />}            
            />
            <ContactMe/>
            </div>
        );
    }
}