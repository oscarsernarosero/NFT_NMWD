import React from "react";

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

export class Marketplace extends React.Component{


  render(){
    return (
        <div>
            {
              <MarketPlaceHead/>
            }
            {
              <InitializeContracts
                updateNMWDContract={ (address) => {
                  return this.props.updateNMWDContract(address);
                  } 
                }
                transferOwnership = { (to) => {
                  return this.props.transferOwnership(to);
                  }
                }
                NFTAddress={this.props.NFTAddress}
                MarketplaceAddress={this.props.MarketplaceAddress}
              />
            }
            {
              <UpdateNMWDContract
                updateNMWDContract={ (address) => {
                  return this.props.updateNMWDContract(address);
                } }
              />
            }
            {
              <TransferOwnership
                transferOwnership = { (to) => {
                  return this.props.transferOwnership(to);
                }}
              />
            }
            {
              <SetPrice
                setPrice = { (price, tokenId) => {
                  return this.props.setPrice(price, tokenId);
                }}
              />
            }
            {
              <GetPrice
                getPrice = { (tokenId) => {
                  return this.props.getPrice( tokenId);
                }}
              />
              }
            {
              <MarketPlaceApprove
                marketPlaceApprove={ (_tokenId) => {
                  return this.props.approveNMWD(_tokenId);
                } }
              />
            }
            {
              <Purchase
                getPrice = { (tokenId) => {
                  return this.props.getPrice( tokenId);
                }}
                to = {this.props.to}
                of = {this.props.of}
                marketPlaceAddress = {this.props.MarketplaceAddress}
              />
            }
            {
              <MintThroughPurchase
                to = {this.props.to}
                marketPlaceAddress = {this.props.MarketplaceAddress}
                getPrice = { (tokenId) => {
                  return this.props.getPrice( tokenId);
                }}
              />
            }
            {
              <GetUserBalance
                getUserBalance = { (_address) => {
                  return this.props.getUserBalance(_address);
                }
              }
              address = {this.props.selectedAddress}
              />
            }
            {
              <WithdrawUserFunds
                withdrawUserFunds = { (amount) => {
                  return this.props.withdrawUserFunds( amount);
                }}
                getUserBalance = { (_address) => {
                  return this.props.getUserBalance(_address);
                }
              }
              address = {this.props.selectedAddress}
              />
              }
              {
              <SetForSale
                setForSale = { (tokenId, forSale) => {
                  return this.props.setForSale(tokenId, forSale);
                }}
              />
            }
            {
              <GetForSale
                getForSale = { (tokenId) => {
                  return this.props.getForSale( tokenId);
                }}
              />
              }
              {
              <GetContractBalance
                getContractBalance = { () => {
                  return this.props.getContractBalance();
                }
              }
              address = {this.props.MarketPlaceAddress}
              />
            }
              {
              <WithdrawFromContract
                withdrawFromContract = { (to, amount) => {
                  return this.props.withdrawFromContract(to, amount);
                }}
                getContractBalance = { () => {
                  return this.props.getContractBalance();
                }
              }
              myAddress={this.props.selectedAddress}
              />
              }
            {
              <GetBackOwnership
                getBackOwnership ={ () => {
                  return this.props.getBackOwnership();
                }}
              />
            }
            
        </div>
    );
    }
}
