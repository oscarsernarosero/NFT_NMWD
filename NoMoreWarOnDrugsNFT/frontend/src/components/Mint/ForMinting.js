import React from "react";
import { PaginationForMinting } from "./PaginationForMinting";
import "../../style/gallery.css";


export class ForMinting extends React.Component{

    constructor(props){
        super(props);
        //HERE IS WHERE WE SETUP THE NFTs FOR MINTING
        const files = require("../../localDB/uri_files.json");
        let forMint = {};

        if (Object.entries(files).length>1){
          Object.entries(files).map( ([key,value],index) => {
            
              const uri = require("../../uris/"+value+".json");
              forMint[key]=uri;
            });
          }

        this.state = {nftsForMint: forMint, mounted:false};
    }

    componentDidMount(){
      this.setState({mounted:true});
    }

  

  render(){
    console.log("ForMinting NETWROK:",this.props.network);
    if(this.state.mounted){
      console.log("rendering from ForMinting");
      return (
        <div className="gallery">
            <PaginationForMinting
            nftsForMint={this.state.nftsForMint}
            {...this.props}
            />
           
            </div>
  
          );
    }else{
      return <div></div>
    }
    
    }
}