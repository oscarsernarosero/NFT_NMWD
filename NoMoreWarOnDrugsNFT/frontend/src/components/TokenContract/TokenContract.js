import React from "react";

import { Mint } from "./mint";
import { TokenByIndex } from "./TokenByIndex";
import { IdToOwnerIndex } from "./IdToOwnerIndex";
import { GetOwnerOf } from "./GetOwnerOf";
import { TokenURI } from "./TokenURI";
import { Approve } from "./Approve";
import { SetApprovalForAll } from "./SetApprovalForAll";
import { TransferNMWD } from "./TransferNMWD";
import { TransferFrom } from "./TransferFrom";
import { TokenMessage } from "./TokenMessage";
import { SetTokenMessage } from "./SetTokenMessage";

import { TransactionErrorMessage } from "../TransactionErrorMessage";
import { WaitingForTransactionMessage } from "../WaitingForTransactionMessage";

export class TokenContract extends React.Component{

    constructor(props){
        super(props);
        console.log("token contract props: ",props);
    }

  render(){
    return (
        <div>
            <div className="row">
                <div className="col-12">
                <p>
                    Welcome <b>{this.props.selectedAddress}</b>
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
                {this.props.txBeingSent && (
                    <WaitingForTransactionMessage txHash={this.props.txBeingSent} />
                )}

                {/* 
                    Sending a transaction can fail in multiple ways. 
                    If that happened, we show a message here.
                */}
                {this.props.transactionError && (
                    <TransactionErrorMessage
                    message={this.props._getRpcErrorMessage(this.props.transactionError)}
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
                        return this.props.safeTransferFrom(owner, to, tokenId);
                    }}
                    owner={this.props.selectedAddress}
                    />
                }
                {
                    <TransferFrom 
                    safeTransferFrom={ (owner, to, tokenId) => {
                        return this.props.safeTransferFrom(owner, to, tokenId);
                    }}
                    />
                }
                {
                    <GetOwnerOf 
                    getOwnerOf={ (id) => {
                        return this.props.getOwnerOf(id);
                    }}
                    />
                }
                {
                    <Approve 
                    approve={ (address, id) => {
                        return this.props.approve(address, id);
                    }}
                    />
                }
                {
                    <SetApprovalForAll 
                    setApprovalForAll={ (address, approve) => {
                        return this.props.setApprovalForAll(address, approve);
                    }}
                    />
                }
                {
                    <IdToOwnerIndex
                    idToOwnerIndex={ (owner, index) => {
                        return this.props.idToOwnerIndex(owner, index);
                    } 
                    }/>
                }
                {

                }
                {
                    <TokenByIndex
                    tokenByIndex={  (index) => {
                        return this.props.tokenByIndex(index);
                    } 
                    } 
                    />
                }
                {
                    <TokenMessage
                    tokenMessage={  (id) => {
                        return this.props.tokenMessage(id);
                    } 
                    } 
                    />
                }
                {
                    <TokenURI
                    tokenURI={ (_tokenId ) => {
                    return this.props.tokenURI(_tokenId);
                } 
                }
                owner = {this.props.owner}
                />
                }
                {
                    <SetTokenMessage
                    setTokenMessage={ (_tokenId, _msg ) => {
                    return this.props.setTokenMessage(_tokenId, _msg );
                } 
                }
                />
                }
                {
                    <Mint
                    mint={ (_to, _tokenId, _uri) => {
                        return this.props._mint(_to, _tokenId, _uri);
                    } }
                    owner = {this.props.owner}
                    />
                }
                </div>
            </div>
        </div>
    );
    }
}
