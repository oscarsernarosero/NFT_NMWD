import React from "react";
import Pagination from "react-pagination-js";
import {Filter} from  "../Gallery/Filter";
import { FindById } from "../Gallery/FindById";
import "react-pagination-js/dist/styles.css"; // import css
import { ImageNFT } from "../Gallery/ImageNFT";
import "../../style/pagination.css";
import { CgViewGrid } from "react-icons/cg";
import { CgUiKit } from "react-icons/cg";
import { InfoPopup } from "../Generics/InfoPopup";
import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';

import { Carousel } from "../Gallery/Carousel";


  export class PaginationForMinting extends React.Component{


    constructor(props){
        super(props);
        const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.state = {nfts: [demo_NFT], mounted: false, page:props.page, ids: [-1], myIds: [-1], filteredIds:[],pageSize:9, view:1, filterBy:{topic:[], artist:[],language:-1}};
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.listView = this.listView.bind(this);
        this.albumView = this.albumView.bind(this);
        this.filterNFTs = this.filterNFTs.bind(this);
        this.findById = this.findById.bind(this);
        this.viewInfo = this.viewInfo.bind(this);
        console.log(this.state);
        this.DB = require("../../localDB/attributes.json");
        this.handler1=0;
        
      }

    async componentDidMount(){
        //we wait until the Dapp loads the wallet.
        const sleep = ms => new Promise(resolve => this.handler1=setTimeout(resolve, ms));
        while((!this.props.address)&&(!this.props.provider_defaulted)){
          await sleep(500);  
        }
        
        //we get all the NFT Ids
        //if(!this.state.mywallet){
          await this.getNFTids();
        //}

        //we create an empty array to store the NFTs available to mint
        const ids_to_mint =[];
        //we iterate through the list in the local database and only push
        //the Id if it hasn't been minted yet
        for (const [key, value] of Object.entries(this.props.nftsForMint)) {
            if( !( this.state.ids.includes(key.toLowerCase()) ) ){
                ids_to_mint.push(key);
            }
        }

        //we store the ids to mint in the state of the component.
        await this.setState({ids: ids_to_mint});
        //also, there is no filter yet, therefore the filtered NFTs are all
        //the original NFTs to mint.
        await this.setState({filteredIds: ids_to_mint});
        
        //if we receive a different pageSize, we set it.
        if(this.props.pageSize){
            if(this.props.pageSize !== this.state.pageSize){
                this.setState({pageSize: this.props.pageSize});
        }}

        if( this.props.findId!==0){
          this.findById(this.props.findId);
        }
        //finally, we request the blockchain for the data of the NFTs
        //, but only the ones that we need to display.
        await this.getPageData();
        await this.setState({mounted: true});
        
        if(this.state.nfts.length<5){
          await this.setState({view:1});
        }
    }

    componentWillUnmount(){
      clearTimeout(this.handler1);
  }

    listView(){
        this.setState({view:1});
    }
    albumView(){
        this.setState({view:0});
    }

    viewInfo(){
      this.setState({viewInfoVisble:!this.state.viewInfoVisble});
    }
    

    //let intersection = arrA.filter(x => arrB.includes(x));
    //let union = [...new Set([...arrA, ...arrB])];
    filterNFTs(_byTopic, _byArtist, _byLanguage){
      let filteredByTopic = [];
      let filteredByArtist = [];
      let filteredByLanguage = [];
      let filteredResult = [];

      if(_byTopic.length>0){
        console.log("filtering by topic...");
        let thisTopic;
        _byTopic.map( (_topic) => {
            try{
              thisTopic = this.DB.topic[_topic];
            }catch{
              thisTopic =[]
            }
            filteredByTopic = [...new Set([...filteredByTopic, ...thisTopic])];
            console.log("filteredByTopic: ",filteredByTopic);
        })
      }else{
        filteredByTopic = this.state.ids;
      }

      if(_byArtist.length>0){
        console.log("filtering by artist...");
        let thisArtist;
        _byArtist.map( (_artist) => {
            try{
              thisArtist = this.DB.artist[_artist];
            }catch{
              thisArtist =[]
            }
            filteredByArtist = [...new Set([...filteredByArtist, ...thisArtist])];
            console.log("filteredByArtist: ",filteredByArtist);
        })
      }else{
        filteredByArtist = this.state.ids;
      }

      if(_byLanguage>=0){
        console.log("filtering by language...");
        filteredByLanguage = this.DB.language[_byLanguage];
        console.log("filteredByLanguage: ",filteredByLanguage);
      }else{
        filteredByLanguage = this.state.ids;
      }

      //intersection of all three results:
      filteredResult = filteredByTopic.filter(x => filteredByArtist.includes(x));
      filteredResult = filteredResult.filter(x => filteredByLanguage.includes(x));

      const finalResult =  (this.state.ids).filter(x => filteredResult.includes(x));
      this.setState({filteredIds:finalResult}, () => {
        this.getPageData();
      });
      
    }


    async findById(_id){
      await this.setState({filteredIds: [_id]});
      console.log("filteredIds", this.state.filteredIds)
    }


    componentDidCatch(){
        const demo_NFT = {"description": "error","external_url": "unkown","image": "loading","name": "error","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.setState({nfts: [demo_NFT]});
      }


    async changeCurrentPage(numPage) {
        await this.setState({ page: numPage });
        console.log("change to page",this.state.page);
        this.getPageData();
        const currentUrl = window.location.href;
        let i = currentUrl.lastIndexOf('mint/');
        const url=currentUrl.substr(0,i)+"mint/"+numPage;
        console.log(url)
        window.location.href = url;
        //I am doing this double because it doesn't work if I do it once.
        //window.location.reload();
        //window.location.reload();
      };

    async getPageData(){
        const startAt = this.state.pageSize * (this.state.page-1);
        const endAt = startAt + this.state.pageSize;
        const pageIds = this.state.filteredIds.slice(startAt,endAt);
        
        const nfts = [];
        for(let i=0; i<pageIds.length;i++){
            const data = this.props.nftsForMint[pageIds[i]];
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
        console.log("rendering from PaginationForMinting");
        return (
            <div className="nfts-grid-view">
                <div>
                  {<Translate value='mint.title'/>}
                </div>
                <div>
                  {<Translate value='mint.text'/>}
                </div>
                <div>
                <button onClick={this.listView} 
                    className={this.state.view ? "grid-active": "grid-inactive"}>
                      <CgViewGrid style={{verticalAlign:"middle", fontSize:"1.25rem"}}
                    />&nbsp;Grid</button>
                    <button onClick={this.albumView}
                    className={!this.state.view ? "cover-active": "cover-inactive"}>
                      <CgUiKit style={{verticalAlign:"middle",fontSize:"1.25rem"}}
                    />&nbsp;Cover</button>
                
                <InfoPopup
                      msg="Select grid view or cover view according to your preference"
                      visible = {this.state.viewInfoVisble}
                      viewInfo = {()=>{this.viewInfo()}}
                    />
                    </div>
                <div>
                  <Filter
                  applyFilter = {(_byTopic, _byArtist, _byLanguage) => {
                    return this.filterNFTs(_byTopic, _byArtist, _byLanguage)}}/>
                </div>
                <div>
                  <FindById
                    findById={(id) => {this.findById(id)}}
                    forMint={true}
                  />
                </div>
               <div className={this.state.view ? "": "not-visible"}>
               <ul className="list">
                {this.state.nfts.map((item,index)=>{
                    return <li className="galleryItem"
                    key={index}>
                        <ImageNFT
                            network={this.props.network}
                            provider_defaulted= {this.props.provider_defaulted}
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
                                return this.props.setSelectedId(id, imageUrl, price);
                            }}
                            setPrice = { (price, tokenId) => {
                                return this.props.setPrice(price, tokenId);
                              }}
                              forMint={true}
                              to = {this.props.to}
                              waitForMinedConfirmation={ (tx_hash, func) => {
                                return this.props.waitForMinedConfirmation(tx_hash, func);
                              }}
                        /></li>
                })}
                </ul>
                </div>
                <div className={this.state.view ? "not-visible":"" }>
                <Carousel
                    network={this.props.network}
                    provider_defaulted= {this.props.provider_defaulted}
                    page={this.state.page}
                    nfts={this.state.nfts}
                    address = {this.props.address}
                    marketPlaceAddress = {this.props.marketPlaceAddress}
                    setTokenMessage={ (_tokenId, _msg ) => {
                        return this.props.setTokenMessage(_tokenId, _msg );
                    }}
                    mywallet = {this.props.mywallet}
                    setForSale = { (tokenId, forSale) => {
                        return this.props.setForSale(tokenId, forSale);
                      }}
                      setSelectedId = {(id, imageUrl, price) => {
                        return this.props.setSelectedId(id, imageUrl, price);
                    }}
                    setPrice = { (price, tokenId) => {
                        return this.props.setPrice(price, tokenId);
                      }}
                      waitForMinedConfirmation={ (tx_hash, func) => {
                        return this.props.waitForMinedConfirmation(tx_hash, func);
                      }}
                      forMint={true}
                      to = {this.props.to}
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