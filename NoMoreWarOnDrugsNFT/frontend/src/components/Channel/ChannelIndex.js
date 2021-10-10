import React from "react";
import "../../style/channel.css"
import { IoCaretUp } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { ChannelCategory } from  "./ChannelCategory";


export class ChannelIndex extends React.Component{

        constructor(props){
          super(props);
          console.log("channel index props:",props);
          this.show = this.show.bind(this);
          this.state={categoryVisible: false};
        }

        show(event){
            event.preventDefault();
            this.setState({categoryVisible: !this.state.categoryVisible});
        }

        render(){
            return(
            <div className="blog-index">
                    {Object.entries(this.props.categories).map((key, index) => {
                                          return  <div key={index}>
                                                    <ChannelCategory 
                                                        category={key}
                                                    /> 
                                                  </div>
                                      })
                                      }
            
            </div>
        )}
}