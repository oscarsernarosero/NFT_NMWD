import React from "react";
import "../../style/channel.css"
import { IoCaretUp } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { ChannelItem } from  "./ChannelItem";
import { stringify } from "querystring";


export class ChannelCategory extends React.Component{

        constructor(props){
          super(props);
          this.show = this.show.bind(this);
          this.handleClick = this.handleClick.bind(this);
          this.state={categoryVisible: false};
        }

        show(event){
            event.preventDefault();
            this.setState({categoryVisible: !this.state.categoryVisible});
        }

        handleClick(obj, post){
            console.log("obj categories",obj);
            console.log("handleClick categories",post);
            if (post===undefined)  post="before_1914";
            const currentUrl = window.location.href;
            let i = currentUrl.lastIndexOf('#/channel/');
            const url=currentUrl.substr(0,i)+"#/channel/"+obj;
            console.log(url)
            window.location.href = url;
        }

        render(){
            return(
            <div className="blog-category">
                <button onClick={this.show} className="category-button">
                {this.props.category[0]} &nbsp;
                    {this.state.categoryVisible? <IoCaretUp style={{verticalAlign:"middle"}}/>:
                                                <IoCaretDown style={{verticalAlign:"middle"}}/>}
                    </button>
                    <div className={this.state.categoryVisible? "": "dont-show"}>
                    {Object.entries(this.props.category[1]).map((item, index) => {
                                          return  <div key={index}>
                                                    <ChannelItem 
                                                        itemName={item}
                                                        onClick = {(post)=> {
                                                            return this.handleClick(post)}}
                                                    /> 
                                                  </div>
                                      })
                                      }
                    </div>
            </div>
        )}
}