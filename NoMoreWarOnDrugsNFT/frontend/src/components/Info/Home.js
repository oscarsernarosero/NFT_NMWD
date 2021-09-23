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
                title={translate('home.second.title')}
                text={<p >
                     <Translate value='home.second.para1' />
                    <br/>
                    <br/>
                    <Translate value='home.second.para2' />
                </p>
                }       

            />
            </div>
        );
    }
}