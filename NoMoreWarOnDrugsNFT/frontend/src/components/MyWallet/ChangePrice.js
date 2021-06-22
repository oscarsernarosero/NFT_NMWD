import React from "react";
import { ViewOnEtherscan } from "../Generics/ViewOnEtherscan"
import "../../style/change-price.css"
import { WaitingForComfirmation } from "../Generics/WaitingForComfirmation";


export class ChangePrice extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        
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
        const tokenId = parseInt(this.props.id);
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
                Change The Price Of Your NFT
                </div>
            <div className="paragraph-price">
                Current price: {parseInt(this.props.price)/1000000000000000000} ETH
                </div>
            <form onSubmit={this.handleSubmit} className="form-container-price">
                <div >
                    <div className="justify-center message-label-price">
                       New Price (ETH):
                    </div>
                    <div>
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
                    <div className="tx-hash-price">
                        <ViewOnEtherscan
                            txHash={this.state.txHash}
                        />
                        {/* <label >Tx Hash: {this.state.txHash}</label> */}
                    </div>
      
                    <WaitingForComfirmation
                        waiting={this.state.waiting}
                        txHash = {this.state.txHash}
                    />
                    <div className={this.state.successful ? "success" : "not-visible"}>
                    Your transaction was successful!
                    </div>     
                        
                </div>
                <div className="form-group-price">
                    <input className="mybutton-price" type="submit" value="Change Price" />
                </div>
            </form>
            
        </div>
        </div>
        );
    }
}