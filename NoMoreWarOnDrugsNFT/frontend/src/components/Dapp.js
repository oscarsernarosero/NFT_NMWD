import React from "react";


import {
  HashRouter,
  Route,
} from "react-router-dom";

// We'll use ethers to interact with the Ethereum network and our contract
import { ethers } from "ethers";

// // We import the contract's artifacts and address here, as we are going to be
// // using them with ethers
// import NMWDArtifact from "../contracts/Token_StopTheWarOnDrugs.json";
// import NMWDAddress from "../contracts/contract-address-StopTheWarOnDrugs.json";
// import MarketPlaceArtifact from "../contracts/Token_NMWDMarketPlace.json";
// import MarketPlaceAddress from "../contracts/contract-address-NMWDMarketPlace.json";

// components
import {TokenContract} from "./TokenContract/TokenContract"
import { NavBar } from "./Header/NavBar";
import { WalletStatus } from "./Header/WalletStatus";
import { Marketplace } from "./Marketplace/Marketplace";
import { RoyaltyReceiver } from "./Marketplace/RoyaltyWithdraw";
import { Home } from "./Info/Home";
import { Overview } from "./Info/Overview";
import { Gallery } from "./Gallery/Gallery";
import { NFTOnlyContainer } from "./Gallery/NFTOnlyContainer";
import { Mint } from "./Mint/Mint";
import { MyWallet} from "./MyWallet/MyWallet";
import { SetMessage } from "./MyWallet/SetMessage";
import { NewUri } from  "./NewUri/NewUri";
import { Channel } from "./Channel/Channel"
import { ArtistPartnerProgram } from "./Info/ArtistPartnerProgram";
import { getLocale, setLocale } from "react-i18nify";

// This is the Hardhat Network id, you might change it in the hardhat.config.js
// Here's a list of network ids https://docs.metamask.io/guide/ethereum-provider.html#properties
// to use when deploying to other networks.
const HARDHAT_NETWORK_ID = '1337';
const network = {
  "1":"mainnet",
  "3": "ropsten",
  "4": "rinkeby",
  "1337":"localhost"
}

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
const NMWDArtifact =require("../contracts/Token_StopTheWarOnDrugs.json");
const MarketPlaceArtifact =require("../contracts/Token_SWDMarketPlace.json");
var NMWDAddress =require("../contracts/mainnet-contract-address-StopTheWarOnDrugs.json");
var MarketPlaceAddress =require("../contracts/mainnet-contract-address-SWDMarketPlace.json");



//let firstTime = true;

// This is an error code that indicates that the user canceled a transaction
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

// This component is in charge of doing these things:
//   1. It connects to the user's wallet
//   2. Initializes ethers and the Token contract
//   3. Polls the user balance to keep it updated.
//   4. Transfers tokens by sending transactions
//   5. Renders the whole application
//
// Note that (3) and (4) are specific of this sample application, but they show
// you how to keep your Dapp and contract's state in sync,  and how to send a
// transaction.
export class Dapp extends React.Component {
  constructor(props) {
    super(props);

    // We store multiple things in Dapp's state.
    // You don't need to follow this pattern, but it's an useful example.
    this.initialState = {
      // The info of the token (i.e. It's Name and symbol)
      tokenData: undefined,
      // The user's address and balance
      selectedAddress: undefined,
      balance: undefined,
      // The ID about transactions being sent, and any possible error with them
      txBeingSent: undefined,
      transactionError: undefined,
      networkError: undefined,
      owner: undefined,
      ownerMarketPlace: undefined,
      index_Id: undefined,
      nfts: undefined,
      initialized:false,
      provider_defaulted: false,
      network:"mainnet"
    };

    this.state = this.initialState;
  }

  render() {
    
    return (
      <HashRouter>
        <div> 
          <NavBar/>
          <WalletStatus
            connected={this.state.selectedAddress}
            address={this.state.selectedAddress}
            connectWallet={() => this._connectWallet()} 
            networkError={this.state.networkError}
            dismiss={() => this._dismissNetworkError()}
            network={this.state.network}
          />
          <div>
            
              <Route path="/" exact 
                component={Home}/>

              <Route path="/royalties"  
                  render= { 
                    (props)=><RoyaltyReceiver
                    address={this.state.selectedAddress}
                    waitForMinedConfirmation={ (tx_hash, func) => {
                      return this.waitForMinedConfirmation(tx_hash, func);
                        }
                      }
                    />}
                />

              <Route path="/artist-partner" exact 
                component={ArtistPartnerProgram}/>
             
              <Route path="/overview"  
                component={Overview}
                />

              
                <Route path="/channel/:post?"  
                  render= { 
                    (props)=><Channel
                    language={getLocale()}
                    />}
                />

              <Route path="/nftbyid/:id"  
                render= { 
                  (props)=>
                  <NFTOnlyContainer 
                    address = {this.state.selectedAddress}
                    marketPlaceAddress = {MarketPlaceAddress.Token}

                    getNFTData={ (id) => {
                      return this.getNFTData(id);
                    }}
                    getNFTidsByAddress={(address) => {
                      return this.getNFTidsByAddress(address);
                    }}
                    getAllNFTsIdsOnly = { () => {
                      return this.getAllNFTsIdsOnly();
                    }}
                    to = {this.state.selectedAddress}
                    waitForMinedConfirmation={ (tx_hash, func) => {
                      return this.waitForMinedConfirmation(tx_hash, func);
                    }}
                  />
                }
              />
                
              <Route path="/tokenContract"
                render = {
                  (props)=>
                  <TokenContract 
                    selectedAddress = {this.state.selectedAddress}
                    txBeingSent={this.state.txBeingSent}
                    transactionError={this.state.transactionError}
                    _getRpcErrorMessage={(error)=>{
                      return this._getRpcErrorMessage(error)}}
                    _dismissTransactionError={()=>{
                        return this._dismissTransactionError();
                      }} 
                    safeTransferFrom={ (owner, to, tokenId) => {
                        return this.safeTransferFrom(owner, to, tokenId);
                    }}
                    getOwnerOf={ (id) => {
                      return this.getOwnerOf(id);
                    }}
                    approve={ (address, id) => {
                      return this.approve(address, id);
                    }}
                    setApprovalForAll={ (address, approve) => {
                      return this.setApprovalForAll(address, approve);
                    }}
                    idToOwnerIndex={ (owner, index) => {
                      return this.idToOwnerIndex(owner, index);
                    }}
                    tokenByIndex={  (index) => {
                      return this.tokenByIndex(index);
                    }} 
                    tokenMessage={  (id) => {
                      return this.tokenMessage(id);
                    }}
                    tokenURI={ (_tokenId ) => {
                    return this.tokenURI(_tokenId);
                    }}
                    setTokenMessage={ (_tokenId, _msg ) => {
                      return this.setTokenMessage(_tokenId, _msg );
                    }}
                    mint={ (_to, _tokenId, royaltyRecipient, royaltyValue) => {
                      return this._mint(_to, _tokenId,  royaltyRecipient, royaltyValue);
                    } }
                    owner = {this.state.owner}
                    />
                 }
                />
              <Route path="/marketplace" 
                render={(props)=>
                  <Marketplace
                    updateNMWDContract={ (address) => {
                      return this.updateNMWDContract(address);
                      } 
                    }
                    ownershipToSafe = { to => {
                      return this.ownershipToSafe(to);
                    }}
                    approveNMWD = {() => {
                      return this.approveNMWD();
                    }}
                    transferOwnership = { (to) => {
                      return this.transferOwnership(to);
                      }
                    }
                    NFTAddress={NMWDAddress.Token}
                    MarketplaceAddress={MarketPlaceAddress.Token}
                    setPrice = { (price, tokenId) => {
                      return this.setPrice(price, tokenId);
                    }}
                    setPriceForMinting = { (price, tokenId, royaltyAddress) => {
                      return this.setPriceForMinting(price, tokenId, royaltyAddress);
                    }}
                    getPrice = { (tokenId) => {
                      return this.getPrice( tokenId);
                    }}
                    marketPlaceApprove={ (_tokenId) => {
                      return this.props.approveNMWD(_tokenId);
                    } }
                    of = {this.state.selectedAddress}
                    //marketPlaceAddress = {MarketPlaceAddress.Token}
                    to = {this.state.selectedAddress}
                    withdrawUserFunds = { (amount) => {
                      return this.withdrawUserFunds( amount);
                    }}
                    getUserBalance = { (_address) => {
                      return this.getUserBalance(_address);
                    }}
                    selectedAddress = {this.state.selectedAddress}
                    setForSale = { (tokenId, forSale) => {
                      return this.setForSale(tokenId, forSale);
                    }}
                    getForSale = { (tokenId) => {
                      return this.getForSale( tokenId);
                    }}
                    getContractBalance = { () => {
                      return this.getContractBalance();
                    }}
                    withdrawFromContract = { (to, amount) => {
                      return this.withdrawFromContract(to, amount);
                    }}
                    getBackOwnership ={ () => {
                      return this.getBackOwnership();
                    }}
                    getAllNFTs = { () => {
                    return this.getAllNFTs();
                    }
                    }
                    waitForMinedConfirmation={ (tx_hash, func) => {
                      return this.waitForMinedConfirmation(tx_hash, func);
                    }}
                  />
                }
              />
              <Route path="/gallery/:page?/:id?" 
                render={(props)=>
                  <Gallery
                    network={this.state.network}
                    provider_defaulted= {this.state.provider_defaulted}
                    initialized = {this.state.initialized}
                    address = {this.state.selectedAddress}
                    marketPlaceAddress = {MarketPlaceAddress.Token}

                    getNFTData={ (id) => {
                      return this.getNFTData(id);
                    }}
                    getNFTidsByAddress={(address) => {
                      return this.getNFTidsByAddress(address);
                    }}
                    getAllNFTsIdsOnly = { () => {
                      return this.getAllNFTsIdsOnly();
                    }}
                    to = {this.state.selectedAddress}
                    waitForMinedConfirmation={ (tx_hash, func) => {
                      return this.waitForMinedConfirmation(tx_hash, func);
                    }}
                  />
                }
              />

              <Route path="/mint/:page?/:id?" 
                render={(props)=>
                  <Mint
                  network={this.state.network}
                    provider_defaulted= {this.state.provider_defaulted}
                    address = {this.state.selectedAddress}
                    marketPlaceAddress = {MarketPlaceAddress.Token}

                    getAllNFTsIdsOnly = { () => {
                      return this.getAllNFTsIdsOnly();
                    }}
                    to = {this.state.selectedAddress}
                    getPrice = { (tokenId) => {
                      return this.getPrice( tokenId);
                    }}
                    waitForMinedConfirmation={ (tx_hash, func) => {
                      return this.waitForMinedConfirmation(tx_hash, func);
                    }}
                  />
                }
              />
              <Route path="/wallet/:page?" exact
                render={(props)=>
                  <MyWallet
                  network={this.state.network}
                  provider_defaulted= {this.state.provider_defaulted}
                    getNFTsByAddress = {(address) => {
                      return this.getNFTsByAddress(address);
                  }}
                  address = {this.state.selectedAddress}
                  setTokenMessage={ (_tokenId, _msg ) => {
                    return this.setTokenMessage(_tokenId, _msg );
                  }}
                  setForSale = { (tokenId, forSale) => {
                    return this.setForSale(tokenId, forSale);
                  }}
                  setSelectedId = {(id, imageUrl, price) => {
                    this.setSelectedId(id, imageUrl, price);
                  }}
                  setPrice = { (price, tokenId) => {
                    return this.setPrice(price, tokenId);
                  }}
                  getUserBalance = { (_address) => {
                    return this.getUserBalance(_address);
                  }}
                  withdrawUserFunds = { (amount) => {
                    return this.withdrawUserFunds( amount);
                  }}
                  getNFTData={ (id) => {
                    return this.getNFTData(id);
                  }}
                  getNFTidsByAddress={(address) => {
                    return this.getNFTidsByAddress(address);
                  }}
                  getAllNFTsIdsOnly = { () => {
                    return this.getAllNFTsIdsOnly();
                  }}
                  waitForMinedConfirmation={ (tx_hash, func) => {
                    return this.waitForMinedConfirmation(tx_hash, func);
                  }}
                  safeTransfer = { (owner, to, tokenId) => {
                    return this.safeTransferFrom(owner, to, tokenId);
                  }}
                  />
                }
              />
              <Route path="/setmessage" 
                render={(props)=>
                  <SetMessage
                  network={this.state.network}
                  address = {this.state.selectedAddress}
                  setTokenMessage={ (_tokenId, _msg ) => {
                    return this.setTokenMessage(_tokenId, _msg );
                  }}
                  id = {this.state.selectedId}
                  getNFTData={ (id) => {
                    return this.getNFTData(id);
                  }}
                  waitForMinedConfirmation={ (tx_hash, func) => {
                    return this.waitForMinedConfirmation(tx_hash, func);
                  }}
                  />
                }
              />
              
              
              <Route path="/new_uri" 
              render={(props)=>
                  <NewUri/>}
                  />
            
            </div>
          </div>
        </HashRouter>
    );
  }

  componentDidMount() {
    // We poll the user's balance, so we have to stop doing that when Dapp
    // gets unmounted
    //this._stopPollingData();
    
    this._intializeEthers();
  }

  async _connectWallet() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    //try{
      const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' }) 
      
      console.log("selected_address",selectedAddress);
      // Once we have the address, we can initialize the application.
    this.setState({provider_defaulted:false});
  
      this._initialize(selectedAddress);
      console.log("connected");

    // }catch{
    //  const [selectedAddress] = "0x0000000000000000000000000000000000";
    //   console.log(selectedAddress);
    //   this._initialize(selectedAddress);
    // }

    

    // We reinitialize it whenever the user changes their account.
    window.ethereum.on("accountsChanged", ([newAddress]) => {
      //this._stopPollingData();
      // `accountsChanged` event can be triggered with an undefined newAddress.
      // This happens when the user removes the Dapp from the "Connected
      // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
      // To avoid errors, we reset the dapp state 
      if (newAddress === undefined) {
        return this._resetState();
      }
      
      this._initialize(newAddress);
    });
    
    // We reset the dapp state if the network is changed
    //window.ethereum.on("networkChanged", ([networkId]) => {
    window.ethereum.on("chainChanged", (_chainId) => {
      console.log("chain changed: ",_chainId);
      //this._stopPollingData();
      this._resetState();
    });
    return this.state.selectedAddress;
  }

  async _initialize(userAddress) {

    // This method initializes the dapp
    await this.setState({network:network[window.ethereum.networkVersion]});
      console.log("this.state.network",this.state.network);

    // First we check the network
    NMWDAddress =require("../contracts/"+network[window.ethereum.networkVersion]+"-contract-address-StopTheWarOnDrugs.json");
    MarketPlaceAddress =require("../contracts/"+network[window.ethereum.networkVersion]+"-contract-address-SWDMarketPlace.json");


    // We first store the user's address in the component's state
    console.log(userAddress);
    this.setState({
      selectedAddress: userAddress,
    });

    // Then, we initialize ethers, fetch the token's data, and start polling
    // for the user's balance.

    // Fetching the token data and the user's balance are specific to this
    // sample project, but you can reuse the same initialization pattern.
    this._intializeEthers();
    await this.setState({initialized:true});
    console.log("initialized");
    await this.getContractOwner();
    await this.getMarketplaceOwner()
    console.log("got contract owner");
    this._getTokenData();
    console.log("got token data");
    //this.getAllNFTs();
    //this._startPollingData();

    //automating the process of loading the address of the token to the market place
    //and transfering ownership of the NFT contract to the market place.
    // if(firstTime){
    //   this.updateNMWDContract(NMWDAddress.Token);
    //   this.transferOwnership(MarketPlaceAddress.Token);
    //   firstTime = false;
    // }
    console.log("before return",this.state.selectedAddress);
    
    
  }

  async _intializeEthers() {
    console.log("provider beofre");
    // We first initialize ethers by creating a provider using window.ethereum
    try{
      this._provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("provider",this._provider);
    }catch{
      this._provider = new ethers.getDefaultProvider("mainnet");
      console.log("defaulted provider",this._provider);
      await this.setState({provider_defaulted:true});
    }
    console.log("dafaulted provider?",this.state.provider_defaulted);
    try{
      this._nmwd = new ethers.Contract(
        NMWDAddress.Token,
        NMWDArtifact.abi,
        this._provider.getSigner(0)//do I need this?
      );
  
      this.marketPlace = new ethers.Contract(
        MarketPlaceAddress.Token,
        MarketPlaceArtifact.abi,
        this._provider.getSigner(0)//do I need this?
      );
    }catch{
      this._nmwd = new ethers.Contract(
        NMWDAddress.Token,
        NMWDArtifact.abi,
        this._provider
      );
      console.log("this._nmwd",this._nmwd);
  
      this.marketPlace = new ethers.Contract(
        MarketPlaceAddress.Token,
        MarketPlaceArtifact.abi,
        this._provider
      );
      console.log("this.marketPlace",this.marketPlace);
    }

  }


  setSelectedId(id, imageUrl, price){
    this.setState({selectedId:id, imageUrl: imageUrl, price: price});
  }

  async waitForMinedConfirmation(tx_hash, func){
    return this._provider.once(tx_hash, func);
  }

  async getContractOwner(){
    const owner = await this._nmwd.getOwner();
    console.log("token owner:,",owner);
    this.setState({ owner:  owner });
  }

  async getMarketplaceOwner(){
    const owner = await this.marketPlace.getOwner();
    console.log("marketplace owner:,",owner);
    this.setState({ ownerMarketPlace:  owner });
  }

  async idToOwnerIndex(owner, index){
    try{
      return await this._nmwd.tokenOfOwnerByIndex( owner, index);
    }catch(error){
      console.log(error);
      return {error: "Invalid Index"} 
    }
  }

  async getOwnerOf(id){
    try{
      return await this._nmwd.ownerOf(id);
    }catch(error){
      console.log(error);
      return {error: "Invalid Id"} 
    }
  }

   async tokenByIndex(index){
     try{
      return await this._nmwd.tokenByIndex(index);
     }catch(error){
      console.log(error);
       return {error: "Invalid Index"}
     }
  }

  async tokenURI(tokenId){
    try{
     return await this._nmwd.tokenURI(tokenId);
    }catch(error){
     console.log(error);
      return {error: "Invalid Id."}
    }
 }

   async safeTransferFrom(owner, to, tokenId){
    try{
      //console.log(Object.keys(this._nmwd));
      return await this._nmwd["safeTransferFrom(address,address,uint256)"](owner, to, tokenId);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async approve(address, tokenId){
    try{
      return await this._nmwd.approve(address, tokenId);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }
   
   async setApprovalForAll(address, approve){
    try{
      return await this._nmwd.setApprovalForAll(address, approve);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async royaltyInfo(tokenId){
    try{
      return await this._nmwd.royaltyInfo(tokenId, 10000);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }
   

   async setTokenMessage(tokenId, msg ){
    try{
      return await this._nmwd.setTokenMessage(tokenId, msg);
    }catch(error){
      console.log(error);
      return {error: "Invalid Input"} 
    }
  }

  async tokenMessage(id){
    try{
      return await this._nmwd.tokenMessage(id);
    }catch(error){
      console.log(error);
      return {error: "Invalid Id"} 
    }
  }

  async transferOwnership(to){
    try{
      const tx = await this._nmwd.transferOwnership(to);
      console.log(tx);
      await tx.wait();
      return tx;
    }catch(error){
      console.log(error);
      return {error: "error while transfering ownership"} 
    }
  }

 

 async getNFTidsByAddress(address){
  try{
    const ids= await this._nmwd.getNFTsByAddress(address);
    return ids;
  }catch{
    return {error: "erro"};
  }
  
 }

  async getNFTsByAddress(address){
    const nfts = [];
    try{
      const ids= await this._nmwd.getNFTsByAddress(address);
     
      for (let i=0;i<ids.length;i++){

        const data = await this.getNFTData(ids[i]);
        
        nfts.push(data);
        console.log("data.image: ",data.image);
      }
      console.log("final uri list owned by this address: ",nfts);
      return nfts;

      }catch(error){
        console.log(error);
         return {error: error.message};
       }
    
   }

   async getNFTData(id){
     console.log("start id",id);
        const uri = await this._nmwd.tokenURI(id);
        console.log("1111");
        const CID = uri.substring(7);
        console.log("CID from uri: ",CID);
        const pinata_uri_url = "https://gateway.pinata.cloud/ipfs/"+CID;
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const response = await fetch(pinata_uri_url,);
        await sleep(50);//we sleep for 50 ms to avoid the 429 (too many requests) error
        console.log("response",response);
        const jsonData = await response.text();
        console.log("jsonData ",jsonData);
        const data = JSON.parse(jsonData);
        const price = await this.marketPlace.getPrice(id);
        data["price"] = price._hex; 
        const message = await this._nmwd.tokenMessage(id);
        data["message"] = message;
        data["royaltyInfo"] = await this.royaltyInfo(id);
        console.log("token with id: ",id);
        console.log("Royalty info: ",data["royaltyInfo"]);
        console.log("Royalty info: ",data["royaltyInfo"][0]);
        console.log("Royalty info: ",data["royaltyInfo"][1]._hex);
        data["id"] = id;
        const forSale = await this.marketPlace.getForSale(id);
        data["forSale"] = forSale;
        const nftOwner = await this.getOwnerOf(id);
        data["nftOwner"] = nftOwner;
        
        return data
   }

  async getUserBalance(address){
    try{
      return await this.marketPlace.getUserBalance(address);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async ownershipToSafe(to){
    try{
      const tx = await this.marketPlace.transferOwnership(to);
      console.log(tx);
      await tx.wait();
      return tx;
    }catch(error){
      console.log(error);
      return {error: "error while transfering ownership"} 
    }
  }

   async withdrawUserFunds(amount){
    try{
      return await this.marketPlace.withdrawUserFunds(amount);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async withdrawFromContract(to, amount){
    try{
      return await this.marketPlace.withdrawFromContract(to, amount);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async getContractBalance(){
    try{
      return await this.marketPlace.getMarketPlaceBalance();
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

  async getBackOwnership(){
    try{
      const tx = await this.marketPlace.getBackOwnership();
      console.log(tx);
      await tx.wait();
      return tx;
    }catch(error){
      console.log(error);
      return {error: "error while transfering ownership"} 
    }
  }
  async approveNMWD(tokenId){
    try{
      return await this.marketPlace.approveNMWD(tokenId);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async setPrice(price, tokenId){
    try{
      console.log("about to set price..", price)
      return await this.marketPlace.setPrice(price, tokenId);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async setPriceForMinting(price, tokenId, royaltyAddress){
    try{
      console.log("about to set price for minting..", price)
      return await this.marketPlace.setPriceForMinting(price, tokenId, royaltyAddress);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async updateNMWDContract(address){
    try{
      return await this.marketPlace.updateNMWDcontract(address);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async getPrice(tokenId){
    try{
      return await this.marketPlace.getPrice(tokenId);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async setForSale(tokenId, forSale){
    try{
      return await this.marketPlace.setForSale(tokenId, forSale);
      
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async getForSale(tokenId){
    try{
      return await this.marketPlace.getForSale(tokenId);
     }catch(error){
      console.log(error);
       return {error: error.message};
     }
   }

   async getAllNFTsIdsOnly(){

    let more=true;
    let i=0;
    const ids = [];
    let id;
    let _id;

    while(more){
      try{
        _id = await this._nmwd.tokenByIndex(i);
        console.log("nft with index ",i);
        //id = parseInt(_id._hex);
        id = _id._hex;
      }
      catch{
        more=false;
        break;
      }
      ids.push(id);
      i+=1;
    }
    console.log("from getAllNFTsIdsOnly; ids: ",ids);
    return ids;
   }

   async getAllNFTs(){
     let more=true;
     let i=0;
     const nfts = [];
     let id;
     let _id;
     let myIds = [];

     //first we need to know if I own some NFTs so I can desable 
     //the "buy" button
     try{
      let counter = 0;
      //this is just me waiting for the wallet to get connected (10 sec max)
      while (!this.state.selectedAddress && counter<100){
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(100);
        counter++;
      }
      myIds = await this._nmwd.getNFTsByAddress(this.state.selectedAddress);
      myIds = myIds.map( (_id) => {return parseInt(_id._hex);});
      
     }catch{
       console.log("there was a problem while consulting NFTs owned by address ",
       this.state.selectedAddress);
     }
     console.log("starting iteration of NFTs...");
      while(more){
        try{
          _id = await this._nmwd.tokenByIndex(i);
          id = parseInt(_id._hex);
        }
        catch{
          more=false;
          break;
        }
        const data = await this.getNFTData(id);
        data["owned"] = myIds.includes(id);
        nfts.push(data);
        i+=1;
      }
      console.log("finished itereation of nfts at index ",i);
      console.log("final uri list: ",nfts);
       this.setState({nfts: nfts});
       return nfts;
   }


  // The next to methods are needed to start and stop polling data. While
  // the data being polled here is specific to this example, you can use this
  // pattern to read any data from your contracts.
  //
  // Note that if you don't need it to update in near real time, you probably
  // don't need to poll it. If that's the case, you can just fetch it when you
  // initialize the app, as we do with the token data.
  _startPollingData() {
    this._pollDataInterval = setInterval(() => this._updateBalance(), 1000);

    // We run it once immediately so we don't have to wait for it
    this._updateBalance();
  }

  _stopPollingData() {
    clearInterval(this._pollDataInterval);
    this._pollDataInterval = undefined;
  }

  // The next two methods just read from the contract and store the results
  // in the component state.
  async _getTokenData() {
    //const name = await this._token.name();
    const name = "No More War On Drugs";
    const symbol = "SWD";

   this.setState({ tokenData: { name: name, symbol: symbol } });
  }

  async _updateBalance() {
    const balance = await this._token.balanceOf(this.state.selectedAddress);
    this.setState({ balance });
  }

  // This method sends an ethereum transaction to transfer tokens.
  // While this action is specific to this application, it illustrates how to
  // send a transaction.
  async _transferTokens(to, amount) {
    // Sending a transaction is a complex operation:
    //   - The user can reject it
    //   - It can fail before reaching the ethereum network (i.e. if the user
    //     doesn't have ETH for paying for the tx's gas)
    //   - It has to be mined, so it isn't immediately confirmed.
    //     Note that some testing networks, like Hardhat Network, do mine
    //     transactions immediately, but your dapp should be prepared for
    //     other networks.
    //   - It can fail once mined.
    //
    // This method handles all of those things, so keep reading to learn how to
    // do it.

    try {
      // If a transaction fails, we save that error in the component's state.
      // We only save one such error, so before sending a second transaction, we
      // clear it.
      this._dismissTransactionError();

      // We send the transaction, and save its hash in the Dapp's state. This
      // way we can indicate that we are waiting for it to be mined.
      const tx = await this._token.transfer(to, amount);
      this.setState({ txBeingSent: tx.hash });

      // We use .wait() to wait for the transaction to be mined. This method
      // returns the transaction's receipt.
      const receipt = await tx.wait();

      // The receipt, contains a status flag, which is 0 to indicate an error.
      if (receipt.status === 0) {
        // We can't know the exact error that make the transaction fail once it
        // was mined, so we throw this generic one.
        throw new Error("Transaction failed");
      }

      // If we got here, the transaction was successful, so you may want to
      // update your state. Here, we update the user's balance.
      await this._updateBalance();
    } catch (error) {
      // We check the error code to see if this error was produced because the
      // user rejected a tx. If that's the case, we do nothing.
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }

      // Other errors are logged and stored in the Dapp's state. This is used to
      // show them to the user, and for debugging.
      console.error(error);
      this.setState({ transactionError: error });
    } finally {
      // If we leave the try/catch, we aren't sending a tx anymore, so we clear
      // this part of the state.
      this.setState({ txBeingSent: undefined });
    }
  }

  async _mint(_to, _tokenId, royaltyRecipient, royaltyValue ){
    try{
      const tx = await this._nmwd.mint(_to, _tokenId, royaltyRecipient, royaltyValue );
      console.log(tx);
      await tx.wait();
      return tx;
    }catch(error){
      console.log(error);
      return {error: "Invalid Id"} 
    }
  }


  // This method just clears part of the state.
  _dismissTransactionError() {
    this.setState({ transactionError: undefined });
  }

  // This method just clears part of the state.
  _dismissNetworkError() {
    this.setState({ networkError: undefined });
  }

  // This is an utility method that turns an RPC error into a human readable
  // message.
  _getRpcErrorMessage(error) {
    if (error.data) {
      return error.data.message;
    }

    return error.message;
  }

  // This method resets the state
  _resetState() {
    this.setState(this.initialState);
  }

  // This method checks if Metamask selected network is Localhost:8545 
  _checkNetwork() {
    if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
      return true;
    }

    this.setState({ 
      networkError: 'Please connect Metamask to Localhost:8545'
    });

    return false;
  }
}
