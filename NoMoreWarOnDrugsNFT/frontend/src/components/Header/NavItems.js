import React from "react";
import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';

export const  NavItems = [
    {
        title: <Translate value='navItems.home'/>,
        link: "/",
        className: "nav-link"
    },
    {
        title: <Translate value='navItems.overview'/>,
        link: "/overview",
        className: "nav-link"
    },
    {
        title: <Translate value='navItems.gallery'/>,
        link: "/gallery/",
        className: "nav-link"
    },
    {
        title: <Translate value='navItems.mint'/>,
        link: "/mint/",
        className: "nav-link"
    },
    {
        title: <Translate value='navItems.wallet'/>,
        link: "/wallet",
        className: "nav-link"
    },
    {
        title: <Translate value='navItems.channel'/>,
        link: "/channel",
        className: "nav-link"
    }
    //marketplace is now off the navbar. Simply type manually the url

]

