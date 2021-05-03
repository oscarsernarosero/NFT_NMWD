import React from "react";
import './Home.css'

import { BePartOfHistory } from "./BePartOfHistory";
import { SupportArtists } from "./SupportArtists";

export class Home extends React.Component {
    render(){
        return (
            <div>
            <BePartOfHistory/>
            <SupportArtists/>
            </div>
        );
    }
}