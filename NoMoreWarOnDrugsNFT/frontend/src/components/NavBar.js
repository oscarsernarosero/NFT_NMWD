import React from "react";
import {NavItems} from "./NavItems";
import '../style/NavBar.css'

export class NavBar extends React.Component{

    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

  render(){
    return (
        <nav className="NavItems">
            <h1>No More War On Drugs</h1>
            <div className="menu-icon" onClick={this.handleClick}>
               {this.state.clicked ? " X" : ". . ."}
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {NavItems.map( (item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.className} href={item.link}>
                                {item.title}
                                </a>
                            </li>
                    );} )}
            </ul>
            

        </nav>
        
    );
    }
}
