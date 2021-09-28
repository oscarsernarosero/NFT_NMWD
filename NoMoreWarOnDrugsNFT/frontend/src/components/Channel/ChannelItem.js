import React from "react";


export function ChannelItem(props){

    return(
        <div >
            <button className="blog-index-item" 
            onClick={()=>{props.onClick(props.itemName[0])}}
            >
                {props.itemName[1].title}
            </button>
        </div>
    )
}