import React from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css"; // import css
import { ImageNFT } from "./ImageNFT";
import "../../style/pagination.css"

import { Carousel } from "../Gallery/Carousel";


  export class PaginationForMinting extends React.Component{


    constructor(props){
        super(props);
        const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.state = {nfts: [demo_NFT], mounted: false, page:1, ids: [-1], myIds: [-1],pageSize:6, view:0, fiterBy:{topic:[], artist:[],language:-1}};
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.listView = this.listView.bind(this);
        this.albumView = this.albumView.bind(this);
        console.log(this.state);
        this.DB = require("../../localDB/attributes.json");
        
      }

    async componentDidMount(){
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        while(!this.props.address){
          await sleep(500);  
        }
        
        if(!this.state.mywallet){
          await this.getNFTids();
        }
        const ids_to_mint =[];
        for (const [key, value] of Object.entries(this.props.forMint)) {
            if( !( this.state.ids.includes(key.toLowerCase()) ) ){
                ids_to_mint.push(key);
            }
        }

        this.setState({ids: ids_to_mint});
        this.setState({mounted: true});

        if(this.props.pageSize){
            if(this.props.pageSize != this.state.pageSize){
                this.setState({pageSize: this.props.pageSize});
        }}
        await this.getPageData();
        console.log("from pagination ",this.state);
        
        
    }

    listView(){
        this.setState({view:1});
    }
    albumView(){
        this.setState({view:0});
    }

    //let intersection = arrA.filter(x => arrB.includes(x));
    //let union = [...new Set([...arrA, ...arrB])];
    filterNFTs(){
      let filteredByTopic = [];
      let filteredByArtist = [];
      let filteredByLanguage = [];

      if(this.state.filterBy.topic.length>0){
        let thisTopic;
        this.state.filterBy.topic.map( (_topic) => {
            try{
              thisTopic = this.DB.topic[_topic];
            }catch{
              thisTopic =[]
            }
            filteredByTopic = [...new Set([...filteredByTopic, ...thisTopic])];
        })
      }

      if(this.state.filterBy.artist.length>0){
        let thisArtist;
        this.state.filterBy.artist.map( (_artist) => {
            try{
              thisArtist = this.DB.artist[_artist];
            }catch{
              thisArtist =[]
            }
            filteredByArtist = [...new Set([...filteredByArtist, ...thisArtist])];
        })
      }

      if(this.state.filterBy.language>=0){
        const _language = this.state.filterBy.language;
        filteredByLanguage = this.DB.language[_language];
      }

      let filteredResult = [];
      if(this.state.filterBy.topic.length>0){
        filteredResult = filteredByTopic;
          if(this.state.filterBy.artist.length>0){
            filteredResult = filteredResult.filter(x => filteredByArtist.includes(x));
              if(this.state.filterBy.language>=0){
                filteredResult = filteredResult.filter(x => filteredByLanguage.includes(x));
              }
          }else if(this.state.filterBy.language>=0){
        filteredResult = filteredResult.filter(x => filteredByLanguage.includes(x));
      }
      }else if(this.state.filterBy.artist.length>0){
        filteredResult = filteredByArtist;
          if(this.state.filterBy.language>=0){
            filteredResult = filteredResult.filter(x => filteredByLanguage.includes(x));
          }
      } else if(this.state.filterBy.language>=0){
        filteredResult = filteredByLanguage;
      }

      //finalResult = toca crear una nueva variable de estado que sea ids_to_show
    }


    componentDidCatch(){
        const demo_NFT = {"description": "error","external_url": "unkown","image": "loading","name": "error","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.setState({nfts: [demo_NFT]});
      }


    async changeCurrentPage(numPage) {
        this.setState({ page: numPage });
        console.log("change to page",this.state.page);
        await this.getPageData();
        //I am doing this double because it doesn't work if I do it once.
        this.setState({ page: numPage });
        console.log("change to page",this.state.page);
        await this.getPageData();
      };

    async getPageData(){
        const startAt = this.state.pageSize * (this.state.page-1);
        const endAt = startAt + this.state.pageSize;
        const pageIds = this.state.ids.slice(startAt,endAt);
        
        const nfts = [];
        for(let i=0; i<pageIds.length;i++){
            const data = this.props.forMint[pageIds[i]];
            const price = await this.props.getPrice(pageIds[i]);
            data["price"] = price._hex; 
            data["id"] = pageIds[i];
            data["forSale"] = true;
            nfts.push(data);
        }
        this.setState({nfts: nfts});
        console.log("nfts final pagination: ",this.state.nfts);
    }
    
      async getNFTids(){
        let ids = await this.props.getAllNFTsIdsOnly();
        this.setState({ids: ids});
        console.log("getNFTids formint: ",ids);

      }
      
      render(){
        return (
            <div >
                <div>
                    <h2>Mint New NFTs</h2>
                </div>
                <div>
                    <p>By minting new NFT you have the privilage of inmortalizing yourself
                        in the blockchain by setting a message for your NFT. This message will live for
                        ever in the Ethereum netwrok. Don't miss this opportunity!</p>
                </div>
                <div>
                    <button onClick={this.listView}>List</button>
                    <button onClick={this.albumView}>album</button>
                </div>
               <div className={this.state.view ? "": "not-visible"}>
               <ul className="list">
                {this.state.nfts.map((item,index)=>{
                    return <li className="galleryItem"
                    key={index}>
                        <ImageNFT
                            address = {this.props.address}
                            marketPlaceAddress = {this.props.marketPlaceAddress}
                            uri = {item}
                            setTokenMessage={ (_tokenId, _msg ) => {
                                return this.props.setTokenMessage(_tokenId, _msg );
                            }}
                            mywallet = {this.props.mywallet}
                            setForSale = { (tokenId, forSale) => {
                                return this.props.setForSale(tokenId, forSale);
                              }}
                              setSelectedId = {(id, imageUrl, price) => {
                                return this.props.setSelectedId(id, imageUrl), price;
                            }}
                            setPrice = { (price, tokenId) => {
                                return this.props.setPrice(price, tokenId);
                              }}
                              waitForMinedConfirmation={ (tx_hash, func) => {
                                return this.props.waitForMinedConfirmation(tx_hash, func);
                              }}
                              forMint={true}
                              marketPlaceAddress = {this.props.marketPlaceAddress}
                              to = {this.props.to}
                        /></li>
                })}
                </ul>
                </div>
                <div className={this.state.view ? "not-visible":"" }>
                <Carousel
                    nfts={this.state.nfts}
                  />
                </div>     
                <div className="centered">
                    <Pagination
                    currentPage={this.state.page}
                    sizePerPage={this.state.pageSize}
                    totalSize={this.props.mywallet ? this.state.myIds.length : this.state.ids.length}
                    changeCurrentPage={this.changeCurrentPage}
                    />
                    </div>
                      
              </div>
            );
        }
}