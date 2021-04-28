import React from "react";

// We'll use ethers to interact with the Ethereum network and our contract
import { ethers } from "ethers";

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import TokenArtifact from "../contracts/Token_token.json";
import contractAddress from "../contracts/contract-address-token.json";

import NMWDArtifact from "../contracts/Token_NoMoreWarOnDrugs.json";
import NMWDAddress from "../contracts/contract-address-NoMoreWarOnDrugs.json";

import MarketPlaceArtifact from "../contracts/Token_NMWDMarketPlace.json";
import MarketPlaceAddress from "../contracts/contract-address-NMWDMarketPlace.json";

// All the logic of this dapp is contained in the Dapp component.
// These other components are just presentational ones: they don't have any
// logic. They just render HTML.
import { NoWalletDetected } from "./NoWalletDetected";
import { ConnectWallet } from "./ConnectWallet";
import { Loading } from "./Loading";
import { Transfer } from "./Transfer";
import { TransactionErrorMessage } from "./TransactionErrorMessage";
import { WaitingForTransactionMessage } from "./WaitingForTransactionMessage";
import { NoTokensMessage } from "./NoTokensMessage";
import { Mint } from "./mint";
import { TokenByIndex } from "./TokenByIndex";
import { IdToOwnerIndex } from "./IdToOwnerIndex";
import { GetOwnerOf } from "./GetOwnerOf";
import { TokenURI } from "./TokenURI";
import { Approve } from "./Approve";
import { SetApprovalForAll } from "./SetApprovalForAll";
import { TransferNMWD } from "./TransferNMWD";
import { TransferFrom } from "./TransferFrom";
//import { TokenOwnerAlias } from "./TokenOwnerAlias";
import { TokenMessage } from "./TokenMessage";
import { SetTokenMessage } from "./SetTokenMessage";
import { TransferOwnership } from  "./TransferOwnership";
import { MarketPlaceApprove } from "./MarketPlaceApprove";
import { Purchase } from "./Purchase";
import { SetPrice } from "./SetPrice";
import { MintThroughPurchase } from "./MintThroughPurchase";
import { UpdateNMWDContract } from "./UpdateNMWDContract";
import { MarketPlaceHead } from "./MarketPlaceHead";
import { GetPrice } from "./GetPrice";
import { GetBackOwnership } from "./GetBackOwnership";
import { GetUserBalance } from "./GetUserBalance";
import { GetContractBalance } from "./GetContractBalance";
import { WithdrawUserFunds } from "./WithdrawUserFunds";
import { WithdrawFromContract } from "./WithdrawFromContract";
import { SetForSale } from "./SetForSale";
import { GetForSale } from "./GetForSale";
import { InitializeContracts } from "./InitializeContracts";



// This is the Hardhat Network id, you might change it in the hardhat.config.js
// Here's a list of network ids https://docs.metamask.io/guide/ethereum-provider.html#properties
// to use when deploying to other networks.
const HARDHAT_NETWORK_ID = '31337';
//const HARDHAT_NETWORK_ID = '1337';

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
      index_Id: undefined,
    };

    this.state = this.initialState;
  }

  render() {
    // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install MetaMask.
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }

    // The next thing we need to do, is to ask the user to connect their wallet.
    // When the wallet gets connected, we are going to save the users's address
    // in the component's state. So, if it hasn't been saved yet, we have
    // to show the ConnectWallet component.
    //
    // Note that we pass it a callback that is going to be called when the user
    // clicks a button. This callback just calls the _connectWallet method.
    if (!this.state.selectedAddress) {
      return (
        <ConnectWallet 
          connectWallet={() => this._connectWallet()} 
          networkError={this.state.networkError}
          dismiss={() => this._dismissNetworkError()}
        />
      );
    }

    // If the token data or the user's balance hasn't loaded yet, we show
    // a loading component.
    //if (!this.state.tokenData || !this.state.balance) {
      if (!this.state.tokenData ) {
      return <Loading />;
    }

    // If everything is loaded, we render the application.
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-12">
            <h1>
              {this.state.tokenData.name} ({this.state.tokenData.symbol})
            </h1>
            <p>
              Welcome <b>{this.state.selectedAddress}</b>
            </p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12">
            {/* 
              Sending a transaction isn't an immidiate action. You have to wait
              for it to be mined.
              If we are waiting for one, we show a message here.
            */}
            {this.state.txBeingSent && (
              <WaitingForTransactionMessage txHash={this.state.txBeingSent} />
            )}

            {/* 
              Sending a transaction can fail in multiple ways. 
              If that happened, we show a message here.
            */}
            {this.state.transactionError && (
              <TransactionErrorMessage
                message={this._getRpcErrorMessage(this.state.transactionError)}
                dismiss={() => this._dismissTransactionError()}
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {
              <TransferNMWD 
              safeTransferFrom={ (owner, to, tokenId) => {
                  return this.safeTransferFrom(owner, to, tokenId);
              }}
              owner={this.state.selectedAddress}
              />
            }
            {
              <TransferFrom 
              safeTransferFrom={ (owner, to, tokenId) => {
                  return this.safeTransferFrom(owner, to, tokenId);
              }}
              />
            }
            {
              <GetOwnerOf 
              getOwnerOf={ (id) => {
                  return this.getOwnerOf(id);
              }}
              />
            }
            {
              <Approve 
              approve={ (address, id) => {
                  return this.approve(address, id);
              }}
              />
            }
            {
              <SetApprovalForAll 
              setApprovalForAll={ (address, approve) => {
                  return this.setApprovalForAll(address, approve);
              }}
              />
            }
            {
              <IdToOwnerIndex
                idToOwnerIndex={ (owner, index) => {
                  return this.idToOwnerIndex(owner, index);
                } 
              }/>
            }
            {

            }
            {
              <TokenByIndex
              tokenByIndex={  (index) => {
                  return this.tokenByIndex(index);
                } 
               } 
               />
            }
            {
              <TokenMessage
              tokenMessage={  (id) => {
                  return this.tokenMessage(id);
                } 
               } 
               />
            }
            {
              <TokenURI
              tokenURI={ (_tokenId ) => {
               return this.tokenURI(_tokenId);
             } 
            }
             owner = {this.state.owner}
           />
            }
            {
              <SetTokenMessage
              setTokenMessage={ (_tokenId, _msg ) => {
               return this.setTokenMessage(_tokenId, _msg );
             } 
            }
           />
            }
            {
              <Mint
                 mint={ (_to, _tokenId, _uri) => {
                  return this._mint(_to, _tokenId, _uri);
                } }
                owner = {this.state.owner}
              />
            }
            {
              <MarketPlaceHead/>
            }
            {
              <InitializeContracts
                updateNMWDContract={ (address) => {
                  return this.updateNMWDContract(address);
                  } 
                }
                transferOwnership = { (to) => {
                  return this.transferOwnership(to);
                  }
                }
                NFTAddress={NMWDAddress.Token}
                MarketplaceAddress={MarketPlaceAddress.Token}
              />
            }
            {
              <UpdateNMWDContract
                updateNMWDContract={ (address) => {
                  return this.updateNMWDContract(address);
                } }
              />
            }
            {
              <TransferOwnership
                transferOwnership = { (to) => {
                  return this.transferOwnership(to);
                }}
              />
            }
            {
              <SetPrice
                setPrice = { (price, tokenId) => {
                  return this.setPrice(price, tokenId);
                }}
              />
            }
            {
              <GetPrice
                getPrice = { (tokenId) => {
                  return this.getPrice( tokenId);
                }}
              />
              }
            {
              <MarketPlaceApprove
                marketPlaceApprove={ (_tokenId) => {
                  return this.approveNMWD(_tokenId);
                } }
              />
            }
            {
              <Purchase
                getPrice = { (tokenId) => {
                  return this.getPrice( tokenId);
                }}
                to = {this.state.selectedAddress}
                marketPlaceAddress = {MarketPlaceAddress.Token}
              />
            }
            {
              <MintThroughPurchase
                to = {this.state.selectedAddress}
                marketPlaceAddress = {MarketPlaceAddress.Token}
                getPrice = { (tokenId) => {
                  return this.getPrice( tokenId);
                }}
              />
            }
            {
              <GetUserBalance
                getUserBalance = { (_address) => {
                  return this.getUserBalance(_address);
                }
              }
              address = {this.state.selectedAddress}
              />
            }
            {
              <WithdrawUserFunds
                withdrawUserFunds = { (amount) => {
                  return this.withdrawUserFunds( amount);
                }}
                getUserBalance = { (_address) => {
                  return this.getUserBalance(_address);
                }
              }
              address = {this.state.selectedAddress}
              />
              }
              {
              <SetForSale
                setForSale = { (tokenId, forSale) => {
                  return this.setForSale(tokenId, forSale);
                }}
              />
            }
            {
              <GetForSale
                getForSale = { (tokenId) => {
                  return this.getForSale( tokenId);
                }}
              />
              }
              {
              <GetContractBalance
                getContractBalance = { () => {
                  return this.getContractBalance();
                }
              }
              address = {MarketPlaceAddress.Token}
              />
            }
              {
              <WithdrawFromContract
                withdrawFromContract = { (to, amount) => {
                  return this.withdrawFromContract(to, amount);
                }}
                getContractBalance = { () => {
                  return this.getContractBalance();
                }
              }
              myAddress={this.state.selectedAddress}
              />
              }
              
            {
              <GetBackOwnership
                getBackOwnership ={ () => {
                  return this.getBackOwnership();
                }}
              />
            }
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    // We poll the user's balance, so we have to stop doing that when Dapp
    // gets unmounted
    //this._stopPollingData();
  }

  async _connectWallet() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    //const [selectedAddress] = await window.ethereum.enable();
    const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' }) 
    console.log(selectedAddress);
    // Once we have the address, we can initialize the application.

    // First we check the network
    // if (!this._checkNetwork()) {
    //   return;
    // }

    this._initialize(selectedAddress);
    

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
  }

  _initialize(userAddress) {
    // This method initializes the dapp

    // We first store the user's address in the component's state
    this.setState({
      selectedAddress: userAddress,
    });

    // Then, we initialize ethers, fetch the token's data, and start polling
    // for the user's balance.

    // Fetching the token data and the user's balance are specific to this
    // sample project, but you can reuse the same initialization pattern.
    this._intializeEthers();
    console.log("initialized");
    this.getContractOwner();
    console.log("got contract owner");
    this._getTokenData();
    console.log("got token data");
    //this._startPollingData();

    //automating the process of loading the address of the token to the market place
    //and transfering ownership of the NFT contract to the market place.
    // if(firstTime){
    //   this.updateNMWDContract(NMWDAddress.Token);
    //   this.transferOwnership(MarketPlaceAddress.Token);
    //   firstTime = false;
    // }
  }

  async _intializeEthers() {
    // We first initialize ethers by creating a provider using window.ethereum
    this._provider = new ethers.providers.Web3Provider(window.ethereum);

    // When, we initialize the contract using that provider and the token's
    // artifact. You can do this same thing with your contracts.
    // this._token = new ethers.Contract(
    //   contractAddress.Token,
    //   TokenArtifact.abi,
    //   this._provider.getSigner(0)
    // );

    this._nmwd = new ethers.Contract(
      NMWDAddress.Token,
      NMWDArtifact.abi,
      this._provider.getSigner(0)
    );

    this.marketPlace = new ethers.Contract(
      MarketPlaceAddress.Token,
      MarketPlaceArtifact.abi,
      this._provider.getSigner(0)
    );

  }

  async getContractOwner(){
    const owner = await this._nmwd.owner();
    this.setState({ owner:  owner });
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

  async getUserBalance(address){
    try{
      return await this.marketPlace.getUserBalance(address);
     }catch(error){
      console.log(error);
       return {error: error.message};
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

  // async _mintThroughPurchase(_to, _tokenId, _uri ){
  //   try{
  //     const tx = await this.marketPlace.mintThroughPurchase(_to, _tokenId, _uri );
  //     console.log(tx);
  //     await tx.wait();
  //     return tx;
  //   }catch(error){
  //     console.log(error);
  //     return {error: "couldn't mint"} 
  //   }
  // }

  // async purchaseToken(id){
  //   try{
  //     return await this.marketPlace.purchaseToken(id);
  //   }catch(error){
  //     console.log(error);
  //     return {error: "Invalid Id"} 
  //   }
  // }

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
      return await this.marketPlace.setPrice(price, tokenId);
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
    const name = "dummy_token";
    const symbol = "DUMMY";

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

  async _mint(_to, _tokenId, _uri ){
    try{
      const tx = await this._nmwd.mint(_to, _tokenId, _uri );
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
