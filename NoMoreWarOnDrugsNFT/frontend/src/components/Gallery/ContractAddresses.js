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
                <p className="contract-addresses"> StopTheWarOnDrugsNFT: will be revealed soon </p>
                <p className="contract-addresses">Marketplace: will be revealed soon</p>
            </div>
    );
}