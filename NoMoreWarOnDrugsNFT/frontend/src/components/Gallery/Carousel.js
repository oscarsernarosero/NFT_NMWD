import React from "react";
import "../../style/carousel.css"
import { Carousel3d, Slide } from 'vue-carousel-3d';

export class Carousel extends React.Component {

    render(){
        return(
            <div id="carousel-3d-container">
                <carousel-3d controls="visible">
                    <slide  index={0}>
                        slide 0
                    </slide>
                    <slide  index={1}>
                        slide 1
                    </slide>
                </carousel-3d>
                
            </div>
        );
    }
    
}