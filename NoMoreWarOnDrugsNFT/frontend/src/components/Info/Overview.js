import React from "react";
import './Home.css'

import { LeftImage } from "./LeftImage";
import { RightImage } from "./RightImage";
import { ThreeElements } from "./ThreeElements";
import { ContactMe } from "./ContactMe";
import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';
import feather from "../../images/60acd1b2d10a660004f3d0d1.png";
import rosettaStone from "../../images/5c608d38e4b8dd029ff25ae1.png"
import artists from "../../images/5f462ebe803a0d0004146b50.png"
import codoLogo from "../../images/768px-Ipfs-logo-1024-ice-text.png"
import crimeScene from "../../images/58888220bc2fc2ef3a186090.png"
import ethereumLogo from "../../images/5a7593fc64538c292dec1bbf.png"

export class Overview extends React.Component {
    render(){
        
        return (
            <div className="home-container">
            <LeftImage
                src="https://www.pngmart.com/files/15/Diamond-Gemstone-Blue-PNG.png"
                alt="image2"
                title={<Translate value='overview.first.title'/>}
                
                text={<p>{<Translate value='overview.first.text'/>}</p>}
                           
            />
            <RightImage
                src={feather}
                alt="image2"
                title={<Translate value='overview.second.title'/>}
                backgroundImage="https://images.unsplash.com/photo-1626162987518-4fee900a9323?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                text={<Translate value='overview.second.text'/>}
            />
            <LeftImage
                src={rosettaStone}
                alt="image2"
                title={<Translate value='overview.third.title'/>}
                
                text={<Translate value='overview.third.text'/>
                }            
            />
            <ThreeElements
                leftTitle={<Translate value='overview.fourth.lefttitle'/>}
                leftText={<Translate value='overview.fourth.left'/>}

                middleTitle={<Translate value='overview.fourth.middletitle'/>}
                middleText={<Translate value='overview.fourth.middle'/>}
                
                rightTitle={<Translate value='overview.fourth.righttitle'/>}
                rightText={<Translate value='overview.fourth.right'/>}
            />
            <LeftImage
                src="https://images.pexels.com/photos/3779014/pexels-photo-3779014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="image2"
                title={<Translate value='home.artist_partner.title'/>}
                
                text={ <Translate value='home.artist_partner.text' />}            
            />
            <RightImage
                src={artists}
                alt="image2"
                title={<Translate value='overview.fifth.title'/>}
                backgroundImage="https://images.pexels.com/photos/1212408/pexels-photo-1212408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

                text={<Translate value='overview.fifth.text'/>}
                
            />
             
            <LeftImage
                src={codoLogo}
                alt="image2"
                //backgroundImage="https://www.eluniversal.com.mx/sites/default/files/2019/08/23/ejercito_.jpg"
                title={<Translate value='overview.id_cid.title'/>}
                text={<Translate value='overview.id_cid.text'/>}   
            />
            <RightImage
                src={crimeScene}
                alt="image2"
                backgroundImage="https://images.pexels.com/photos/5202425/pexels-photo-5202425.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                title={<Translate value='overview.sixth.title'/>}
                text={<Translate value='overview.sixth.text'/>}   
            />
            <LeftImage
                src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png"
                alt="image2"
                title={<Translate value='overview.seventh.title'/>}
                text={<Translate value='overview.seventh.text'/>}           
            />
            <RightImage
                src="https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx046-128.png"
                alt="image2"
                backgroundImage="https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title={<Translate value='overview.about_me.title'/>}
                text={<Translate value='overview.about_me.text'/>}   
            />
            <ContactMe/>
            </div>
            
        );
    }
}