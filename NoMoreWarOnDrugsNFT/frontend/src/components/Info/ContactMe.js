import React from "react";
import "./Home.css";

import"../../i18n/text";
import { Translate } from 'react-i18nify';

export function ContactMe(props){

    return(
        <div className="contact-me-container">
            <div className="contact-me-filter">
                <div className="contact-me-title"><Translate value='home.contact_me'/>
                 </div>
                    nft@stopthewarondrugs.com
                </div>
            </div>
    );
}