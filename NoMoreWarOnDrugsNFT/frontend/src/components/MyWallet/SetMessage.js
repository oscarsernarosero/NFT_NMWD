import React from "react";
import { MyNFTs } from "./MyNFTs";
import "../../style/set-message.css"


export class SetMessage extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        
        this.state = {msg: "", txHash: "", count:0};
    
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.msgInput = React.createRef();
        this.container = React.createRef();
     
      }

    //   componentDidMount(){
    //     this.container.Style.Add("background-image", "");
    //   }
      handleChangeMsg(event) {
        this.setState({msg: event.target.value, count: event.target.value.length});
        
      }
    
    
      async handleSubmit(event) {
        event.preventDefault();
        const msg = this.state.msg;
        const tokenId = this.props.id;
        console.log("msg: ",msg," tokenId: ",tokenId);
    
        if (msg && tokenId) {
            const tx =  await this.props.setTokenMessage(tokenId, msg );
            console.log(tx);
            if (tx.error){
                this.setState({txHash: tx.error});
            }else{
                this.setState({txHash: tx.hash});
                this.msgInput.current.value = "";
            }
            
        }
      
      }
  
  render(){
    return (
        <div style={
            {backgroundImage: 
                'url(' + "https://gateway.pinata.cloud/ipfs/QmZZm8zUcThQKxDwtYUAquscqnyRqjgGKMJf8Wt2533pAd" + ') ',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }
                } >
            <div className="title justify-center">
                Set The Message Of Your NFT
                </div>
            <div className="paragraph">
                Congratulations! You, as the owner of a NMWD NFT token, have the privilage of inmortalizing yourself with a message that will live for ever in the blockchain.
                Be careful though. This message cannot be changed ever again once you submit it. Also, take into account that the message cannot be longer than 100 characters.
                Welome to the inmortal phase of your thoughts!
                </div>
            <form onSubmit={this.handleSubmit} className="form-container">
                <div className="set-message">
                    <div className="justify-center message-label">
                       Message:
                    </div>
                    <div>
                        <textarea rows = "4" cols = "70" maxlength = "250" placeholder="Welcome to inmortality"
                            id="text-area"
                            className="message-input"
                            onChange={this.handleChangeMsg}
                            ref={this.msgInput}
                            required
                            ></textarea>
                    </div>
                    <div className="tx-hash-counter-container">
                        <div className="tx-hash">
                        <label >Tx Hash: {this.state.txHash}</label>
                        </div>
                        <div id="the-count">
                            <span id="current" className="counter-text">{this.state.count}/250</span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input className="button" type="submit" value="Set Message" />
                </div>
            </form>
        </div>
        );
    }
}