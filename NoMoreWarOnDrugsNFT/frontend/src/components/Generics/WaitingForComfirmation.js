import React from "react";
import ReactLoading from 'react-loading';
import "../../style/waiting.css";

export class WaitingForComfirmation extends React.Component{

    constructor(props){
        super(props);
        this.state = {close: false};
        this.close = this.close.bind(this);
    }

    close(){
        this.setState({close:true});
    }

    render(){
        return(
            <div className={this.props.waiting && !this.state.close ? "waiting-container" : "not-visible"}>
                <div className="popup">
                    <div className="loading">
                        <ReactLoading type={"spin"} color={"#ffffff"} height={'55%'} width={'55%'} />
                            {/* <button onclick={this.close}> Ok </button> */}
                    </div>
                    <div className="msg-loading">
                        Your transaction is being processed in the blockchain.
                        Please wait until it gets mined.
                    </div>
                
                </div>
                           
            </div>
        );
    }
}


