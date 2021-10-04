import React from "react";
import "../../style/market-info.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

import"../../i18n/text";
import { Translate } from 'react-i18nify';

export function MarketInfo(props){

    return(
        <div className="market-info-container">
            <div className="market-info-title"><AiOutlineInfoCircle style={{verticalAlign:"middle"}}/> <Translate value='marketplace.title'/> </div>
            <div className="market-info-text"><Translate value='marketplace.text'/> </div>
            </div>
    );
}