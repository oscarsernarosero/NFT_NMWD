import React from "react";
import "../../style/change-price.css"
import { LiveBlockchainStatus } from "../Generics/LiveBlockchainStatus";


export class Transfer extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {to: "", txHash: "", waiting: false, successful: false};
    
        this.handleChangeTo= this.handleChangeTo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.close = this.close.bind(this);
    
        this.toInput = React.createRef();
        this.container = React.createRef();
     
      }

    async handleChangeTo(event) {
        
        await this.setState({to: event.target.value});
        console.log("to: ",this.state.to);
        
      }
    
    close(){
        this.props.close();
    }

      async handleSubmit(event) {
        event.preventDefault();

        const tokenId = this.props.id;
        console.log(" to: ",this.state.to);
        console.log(" tokenId: ",tokenId);
        console.log("this.props.my_address", this.props.my_address);
    
        console.log("about to send tx: ");
        const tx =  await this.props.safeTransfer(this.props.my_address,  this.state.to , tokenId );
        this.setState({waiting: true});
        console.log(tx);
        if (tx.error){
            this.setState({txHash: tx});
            this.setState({waiting: false});
        }else{
            this.setState({txHash: tx.hash});
            this.toInput.current.value = "";
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
                Tranfer your NFT to a different address
                </div>
            <div className="paragraph-price">
            Be careful! transfering the NFT to the wrong address can mean the permanent loss of your token.
                </div>
            <form onSubmit={this.handleSubmit} className="form-container-price">
                <div >
                    <div className="justify-center message-label-price">
                       Transfer to Ethereum address:
                    </div>
                    <div>
                        <input 
                            id="input"
                            className="to"
                            onChange={this.handleChangeTo}
                            ref={this.toInput}
                            required
                            type="text"
                            />
                    </div>
                    <div>
                        <LiveBlockchainStatus
                            txHash={this.state.txHash}
                            waiting={this.state.waiting}
                            successful = {this.state.successful}
                        />
                    </div>
                </div>
                <div className="form-group-price">
                    <input className="mybutton-price" type="submit" value="Transfer" />
                </div>
            </form>
            
        </div>
        </div>
        );
    }
}