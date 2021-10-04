import React from "react";
import "../../style/artist-partner.css";

import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';

export function ArtistPartnerProgram(props){

    return(
        <div className="artist-partner-container">
            <h2>{<Translate value='artist_partner.title'/>}</h2>
            <h4>{<Translate value='artist_partner.subtitle1'/>}</h4>
            <Translate value='artist_partner.paragraph1'/>
            <h4>{<Translate value='artist_partner.subtitle2'/>}</h4>
            <Translate value='artist_partner.paragraph2'/>
            <h4>{<Translate value='artist_partner.subtitle3'/>}</h4>
            <Translate value='artist_partner.paragraph3'/>
            <h4>{<Translate value='artist_partner.subtitle4'/>}</h4>
            <Translate value='artist_partner.paragraph4'/>
            <h4>{<Translate value='artist_partner.subtitle5'/>}</h4>
            <Translate value='artist_partner.paragraph5'/>
            
            
            </div>
    );
}