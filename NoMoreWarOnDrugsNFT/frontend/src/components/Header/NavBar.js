import React from "react";
import {NavItems} from "./NavItems";
import '../../style/NavBar.css'

import { Link} from "react-router-dom";

export class NavBar extends React.Component{

    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

  render(){
    return (
            <nav className="NavItems">
                <div className="neon">
                    <span className="title-header" data-text="">
                        No More War On Drugs</span>
                    <span className="gradient"></span>
                    <span className="spotlight"></span>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                {this.state.clicked ? " X" : ". . ."}
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavItems.map( (item, index) => {
                        return (
                            <li key={index}>
                               {/*<a className={item.className} href={item.link}>*/}
                                <Link to={item.link} className={item.className}>
                                    {item.title}
                                    </Link>
                                {/*{item.title}
                                     </a> */}
                                </li>
                        );} )}
                </ul>
            </nav>
        
    );
    }
}
