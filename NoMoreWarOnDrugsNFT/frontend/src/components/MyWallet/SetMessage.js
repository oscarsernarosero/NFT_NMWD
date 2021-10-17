import React from "react";
import { Popup } from "../Generics/Popup";
import "../../style/set-message.css"

import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';


export class SetMessage extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        
        this.state = {msg: "", txHash: "", count:0, image:"", animation:false,
        popupVisible: false, waiting:false, successful:false};
    
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closePopup = this.closePopup.bind(this);
    
        this.msgInput = React.createRef();
        this.container = React.createRef();
     
      }

      async componentDidMount(){
        let nft_data = await this.props.getNFTData(this.props.id);

        let CID="";
        let pinata_content_url;
        let animation=false;
        if (nft_data.animation_url!==undefined && nft_data.animation_url!==""){
          animation=true;
          CID = (nft_data.animation_url).substring(7);
        }else{
          CID = (nft_data.image).substring(7);
        }
        if(CID){
          pinata_content_url = "https://ipfs.fleek.co/ipfs/"+CID;
        }else{
          if (animation){
            pinata_content_url = "https://ipfs.fleek.co/ipfs/bafybeihj7gwt5cqj2pk35qkdthyt5dmvknstf2k4fqsrwgmpchd7ucypni";//change this for logo later
      
          }else{
            pinata_content_url = "https://ipfs.fleek.co/ipfs/QmNZxE7QumQqD4WkvPBps7yfwW876Ns55dCf6tCbcFvF5a";//change this for logo later
          }
        }
        await this.setState({image:pinata_content_url, animation:animation});

        
      }
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
            await this.props.waitForMinedConfirmation(tx.hash, (tx) => {
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
                'url(' + this.state.image + ') ',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }
                } >
            {/* {this.state.animation?<video autoplay muted loop id="myVideo"
                                    style={{position:"absolute", width:"100%", zIndex:"-1",backgroundColor:"#0000"}}
                                  >
                          <source src={this.state.image} type="video/mp4"/>
                        </video>:
                        <img src={'url(' + this.state.image + ') '} style={  {width:"100%"} }></img>} */}
            <div className="title justify-center">
                {<Translate value='setMessage.title'/>}
                </div>
            <div className="paragraph">
                {<Translate value='setMessage.text'/>}
                </div>
                <Popup 
                  network={this.props.network}
                  visible = {this.state.popupVisible}
                  txHash={this.state.txHash}
                  waiting={this.state.waiting}
                  successful = {this.state.successful}
                  close = {()=>{this.closePopup()}}
                />
            <form onSubmit={this.handleSubmit} className="form-container">
                <div className="set-message">
                    <div className="justify-center message-label">
                    {<Translate value='setMessage.message'/>}:
                    </div>
                    <div>
                        <textarea rows = "5" cols = "70" maxLength = "300" placeholder="Welcome to immortality"
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
                            <span id="current" className="counter-text">{this.state.count}/300</span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button className="mybutton" type="submit">{<Translate value='setMessage.setMessage'/>}</button>
                </div>
            </form>

            
        </div>
        );
    }
}