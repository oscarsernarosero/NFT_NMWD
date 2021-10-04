import React from "react";
import './Home.css'

import { LeftImage } from "./LeftImage";
import { RightImage } from "./RightImage";
import { ThreeElements } from "./ThreeElements";
import { ContactMe } from "./ContactMe";
import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';

export class Overview extends React.Component {
    render(){
        
        return (
            <div className="home-container">
            <LeftImage
                src="https://www.pngplay.com/wp-content/uploads/2/Diamond-Transparent-Image.png"
                alt="image2"
                title={<Translate value='overview.first.title'/>}
                
                text={<p>{<Translate value='overview.first.text'/>}</p>}
                           
            />
            <RightImage
                src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/School-Clipart/Quill_and_Ink_Pot_Transparent_PNG_Vector_Clipart.png?m=1507172108"
                alt="image2"
                title={<Translate value='overview.second.title'/>}
                backgroundImage="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
                text={<Translate value='overview.second.text'/>}
            />
            <LeftImage
                src="https://www.pngplay.com/wp-content/uploads/2/Diamond-Transparent-Image.png"
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
                src="https://i.pinimg.com/originals/30/64/8c/30648c7d2798558216aec8580c2746ee.png"
                alt="image2"
                title={<Translate value='overview.fifth.title'/>}
                
                text={<Translate value='overview.fifth.text'/>}
                
            />
            <RightImage
                src="https://forensicminds.co.uk/images/marker5.png"
                alt="image2"
                backgroundImage="https://www.eluniversal.com.mx/sites/default/files/2019/08/23/ejercito_.jpg"
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
                //backgroundImage="https://www.eluniversal.com.mx/sites/default/files/2019/08/23/ejercito_.jpg"
                title={<Translate value='overview.about_me.title'/>}
                text={<Translate value='overview.about_me.text'/>}   
            />
            <ContactMe/>
            </div>
            
        );
    }
}