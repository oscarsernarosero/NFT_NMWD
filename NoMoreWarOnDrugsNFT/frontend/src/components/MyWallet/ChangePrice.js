import React from "react";
import "../../style/change-price.css"
import { LiveBlockchainStatus } from "../Generics/LiveBlockchainStatus";
import"../../i18n/text";
import { Translate, Localize } from 'react-i18nify';


export class ChangePrice extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {newPrice: "", txHash: "", waiting: false, successful: false};
    
        this.handleChangenewPrice = this.handleChangenewPrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.close = this.close.bind(this);
    
        this.priceInput = React.createRef();
        this.container = React.createRef();
     
      }

    //   componentDidMount(){
    //     this.container.Style.Add("background-image", "");
    //   }
    handleChangenewPrice(event) {
        this.setState({newPrice: event.target.value});
        
      }
    
    close(){
        this.props.close();
    }


      async handleSubmit(event) {
        event.preventDefault();

        let newPrice;
        console.log("this.state.price: ",this.state.price);
        if(+this.state.newPrice>999){
            newPrice = (Math.floor(+this.state.newPrice)).toString()+"000000000000000000";
            console.log("newPrice: ",newPrice);
        }else{
            newPrice = (+this.state.newPrice*1000000000000000000).toString();
            console.log("newPrice: ",newPrice);
        }
        const tokenId = this.props.id;
        console.log(" aaa price: ",newPrice," tokenId: ",tokenId);
    
    
        console.log("about to send tx: ");
        const tx =  await this.props.setPrice( newPrice, tokenId );
        this.setState({waiting: true});
        console.log(tx);
        if (tx.error){
            this.setState({txHash: tx});
            this.setState({waiting: false});
        }else{
            this.setState({txHash: tx.hash});
            this.priceInput.current.value = "";
            const res = await this.props.waitForMinedConfirmation(tx.hash, (tx) => {
                this.setState({waiting: false});
                this.setState({successful: true});
                const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
                const currentUrl = window.location.href;
                sleep(2000).then( () => window.location.href = currentUrl).catch( error => console.log("error while reloading:",error));
                
                console.log("tx mined: ", tx.hash);
            })
            console.log("res: ",res);
            
            
        }
        
      
      }
  
  render(){
    return (
        <div className = {this.props.visible ? "visible" : "not-visible" }> 
        <div  className="change-price">
            <div className="close-button">
                <button onClick={this.close} className="button-close-button">x</button>
            </div>
            <div className="title-price justify-center">
            {<Translate value='changePrice.title'/>}
                </div>
            <div className={!this.state.successful ? "paragraph-price" : "not-visible" }>
            {<Translate value='changePrice.current'/>}: {parseInt(this.props.price)/1000000000000000000} ETH
                </div>
            <form onSubmit={this.handleSubmit} className="form-container-price">
                <div >
                    <div className={!this.state.successful ? "justify-center message-label-price" : "not-visible" }>
                    {<Translate value='changePrice.new'/>} (ETH):
                    </div>
                    <div className={!this.state.successful ? "" : "not-visible" }>
                        <input 
                            id="input"
                            className="price-input"
                            onChange={this.handleChangenewPrice}
                            ref={this.priceInput}
                            required
                            type="number"
                            step={0.000000000000000001}
                            />
                    </div>
                    <div>
                        <LiveBlockchainStatus
                            network={this.props.network}
                            txHash={this.state.txHash}
                            waiting={this.state.waiting}
                            successful = {this.state.successful}
                        />
                    </div>
                    {/* <div className="tx-hash-price">
                        <ViewOnEtherscan
                            txHash={this.state.txHash}
                        />
                    </div>
      
                    <WaitingForComfirmation
                        waiting={this.state.waiting}
                        txHash = {this.state.txHash}
                    />
                    <div className={this.state.successful ? "success" : "not-visible"}>
                    Your transaction was successful!
                    </div>     
                         */}
                </div>
                <div className="form-group-price">
                    <button className= {!this.state.successful ? "mybutton-price" : "not-visible" }
                     type="submit">{<Translate value='changePrice.button'/>}</button>
                </div>
            </form>
            
        </div>
        </div>
        );
    }
}