import React from "react";
import { Popup } from "../Generics/Popup";
import "../../style/set-message.css"


export class SetMessage extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        
        this.state = {msg: "", txHash: "", count:0,
        popupVisible: false, waiting:false, successful:false};
    
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closePopup = this.closePopup.bind(this);
    
        this.msgInput = React.createRef();
        this.container = React.createRef();
     
      }

    //   componentDidMount(){
    //     this.container.Style.Add("background-image", "");
    //   }
      handleChangeMsg(event) {
        this.setState({msg: event.target.value, count: event.target.value.length});
        
      }

      closePopup(){
        this.setState({popupVisible:false});
      }
    
    
      async handleSubmit(event) {
        event.preventDefault();

        const msg = this.state.msg;
        const tokenId = this.props.id;
        console.log("msg: ",msg," tokenId: ",tokenId);
        
        this.setState({popupVisible: true});
        console.log("about to send tx");
        const tx =  await this.props.setTokenMessage(tokenId, msg );
        this.setState({waiting: true});
        console.log(tx);
        if (tx.error){
            this.setState({forSale: !this.state.forSale});
            this.setState({txHash: tx});
            this.setState({waiting: false});
          }else{
            this.setState({forSale: !this.state.forSale});
            this.setState({txHash: tx.hash});
            const res = await this.props.waitForMinedConfirmation(tx.hash, (tx) => {
            this.setState({waiting: false});
            this.setState({successful: true});
            console.log("tx mined: ", tx.hash);
            const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
            const currentUrl = window.location.href;
            console.log("currentUrl", currentUrl);
            console.log("currentUrl.length", currentUrl.length);
            console.log("currentUrl.length substring", currentUrl.substring((currentUrl.length-10)));
            const walletUrl = currentUrl.substring(0,(currentUrl.length-10))+"wallet";
            sleep(3000).then( () => window.location.href = walletUrl).catch( error => console.log("error while reloading:",error));
                
          })
            console.log("changed forSale in tx: ",tx.hash);
        }  
      }
  
  render(){
    return (
        <div style={
            {backgroundImage: 
                'url(' + this.props.imageUrl + ') ',
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
                        <textarea rows = "4" cols = "70" maxLength = "250" placeholder="Welcome to inmortality"
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
                    <input className="mybutton" type="submit" value="Set Message" />
                </div>
            </form>

            <Popup 
            visible = {this.state.popupVisible}
            txHash={this.state.txHash}
            waiting={this.state.waiting}
            successful = {this.state.successful}
            close = {()=>{this.closePopup()}}
          />
        </div>
        );
    }
}