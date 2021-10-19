import React from "react";
import "../../style/market-info.css";

import"../../i18n/text";
import { Translate } from 'react-i18nify';

export function ContractAddresses(props){

    return(
        <div className="contract-addresses-container">
            {/* <h6> <Translate value='marketplace.contracts-title'/> </h6>
            <Translate value='marketplace.contracts'/>  */}
            <div className="contract-addresses-title">Contract Addresses: &nbsp; &nbsp; </div>
                <p className="contract-addresses"> StopTheWarOnDrugsNFT: 0x9651101ceC3e4d3FF9331C674bf485a75208D47f </p>
                <p className="contract-addresses">Marketplace (proxy): 0x14c971F1585e57cf484edB509E48E029d5708b1D</p>
            </div>
    );
}