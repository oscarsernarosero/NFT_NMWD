import React from "react";
import './Home.css'

import { BePartOfHistory } from "./BePartOfHistory";
import { SupportArtists } from "./SupportArtists";
import { Buttons } from "./Buttons";

export class Home extends React.Component {
    render(){
        return (
            <div className="home-container">
            <BePartOfHistory/>
            <Buttons/>
            <SupportArtists/>
            </div>
        );
    }
}