import React from "react";
import { setLocale, getLocale } from 'react-i18nify';
import "../../style/language.css"
import '../../style/walletStatus.css'

export class ChangeLanguage extends React.Component{

    constructor(props){
        super(props);

        //before everything, let's check the language
            const lan = navigator.language;
            console.log("language: ",lan);

            if(lan === "es-ES"){
            setLocale('es');
            }else{
            setLocale('en');
            }

        this.state={language:getLocale()};
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    async changeLanguage(event){
        let newLanguage = event.target.value;
        await setLocale(newLanguage);
        await this.setState({language:newLanguage});
    }

        render(){
            return (
            <div className="language-container">
                    <select 
                        value={this.state.language} 
                        onChange={this.changeLanguage}
                        className={this.state.language === "en" ? "change-language english": "change-language espanol"}
                        >   
                        <option value="en">En</option>
                        <option value="es">Es</option>
                        
                    </select>
            </div>
        );
    }

    
}

