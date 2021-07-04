import React from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css"; // import css
import { ImageNFT } from "./ImageNFT";
import "../../style/pagination.css"

import { Carousel } from "../Gallery/Carousel";


  export class PaginationNFTs extends React.Component{


    constructor(props){
        super(props);
        const demo_NFT = {"description": "loading","external_url": "unkown","image": "loading","name": "...Loading","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.state = {nfts: [demo_NFT], mounted: false, page:1, ids: [-1], myIds: [-1],pageSize:6};
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.listView = this.listView.bind(this);
        this.albumView = this.albumView.bind(this);
        console.log(this.state);
        
      }

    async componentDidMount(){
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        while(!this.props.address){
          await sleep(500);  
        }
        
        if(!this.state.mywallet){
          await this.getNFTids();
        }
        let myIds = await this.props.getNFTidsByAddress(this.props.address);
        console.log("myIds raw ",myIds);
        if(myIds.length>0){
            myIds = myIds.map( (_id) => {return _id._hex;});
            console.log("myIds ",myIds);
            this.setState({mounted: true, myIds: myIds});

            if(this.props.pageSize){
                if(this.props.pageSize != this.state.pageSize){
                    this.setState({pageSize: this.props.pageSize});
            }}}
            await this.getPageData();
            console.log("from pagination ",this.state);
            
        
    }

    componentDidCatch(){
        const demo_NFT = {"description": "error","external_url": "unkown","image": "loading","name": "error","attributes": [ {"artist": "loading"},{"webpage":"https://github.com/oscarsernarosero?tab=overview&from=2021-04-01&to=2021-04-27"}],forSale:false}
        this.setState({nfts: [demo_NFT]});
      }

    async componentDidUpdate(prevProps){
        if(prevProps.address !== this.props.address && this.state.mounted === true){
            const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
            await sleep(1500);    
            if(!this.state.mywallet ){
              await this.getNFTids();
            }
            let myIds = await this.props.getNFTidsByAddress(this.props.address);
            console.log("myIds raw didupdatw",myIds);
            if(myIds.length>0){
                myIds = myIds.map( (_id) => {return _id._hex;});
                console.log("myIds ",myIds);
                this.setState({myIds: myIds});
            }
            await this.getPageData();
        }
    }

    listView(){
      this.setState({view:1});
    }
    albumView(){
        this.setState({view:0});
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
        let pageIds;
        if(this.props.mywallet){
          pageIds = this.state.myIds.slice(startAt,endAt);
        }else{
          pageIds = this.state.ids.slice(startAt,endAt);
        }
        const nfts = [];
        for(let i=0; i<pageIds.length;i++){
            const data = await this.props.getNFTData(pageIds[i]);
            if(!this.props.mywallet){
              data["owned"] = this.state.myIds.includes(pageIds[i]);

            }
            nfts.push(data);
        }
        this.setState({nfts: nfts});
        console.log("nfts final pagination: ",this.state.nfts);
    }
    
      async getNFTids(){
        let ids = [];
         if(this.props.address) {
            ids = await this.props.getAllNFTsIdsOnly();
            this.setState({ids: ids});
            console.log("getNFTids: ",ids);

         }else{
            this.state = {ids: [0]};
        }
        
      }
      
      render(){
        return (
            <div >
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
                              
                              forMint={false}
                              to = {this.props.to}
                              waitForMinedConfirmation={ (tx_hash, func) => {
                                return this.props.waitForMinedConfirmation(tx_hash, func);
                              }}
                              safeTransfer = { (owner, to, tokenId) => {
                                return this.props.safeTransfer(owner, to, tokenId);
                              }}
                        /></li>
                })}
                </ul>
                </div>
                <div className={this.state.view ? "not-visible":"" }>
                  <Carousel
                      nfts={this.state.nfts}
                      address = {this.props.address}
                      marketPlaceAddress = {this.props.marketPlaceAddress}
                      mywallet = {this.props.mywallet}
                      forMint={false}
                      to = {this.props.to}
                      waitForMinedConfirmation={ (tx_hash, func) => {
                      return this.props.waitForMinedConfirmation(tx_hash, func);
                    }}
                    safeTransfer = { (owner, to, tokenId) => {
                      return this.props.safeTransfer(owner, to, tokenId);
                    }}
                    
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