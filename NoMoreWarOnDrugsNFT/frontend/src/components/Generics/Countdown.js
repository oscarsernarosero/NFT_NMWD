import React, { Component } from "react";
import "../../style/countdown.css"

export class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {  days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.intervalID=0;
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        this.intervalID=setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    leading0(num) {
        return num < 10 ? "0" + num : num;
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline+" GMT") - Date.parse(new Date());
        if (time < 0) {
        this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({ days, hours, minutes, seconds });
        }
    }
    render() {
        return (
        <div className="countdown-component-container">
            <div className="countdown-legend">Time remaining for launch</div>
            <div className="countdown-container">
                <div className="Clock-value">{this.leading0(this.state.days)}</div>
                <div className="Clock-value">{this.leading0(this.state.hours)}</div>
                <div className="Clock-value"> {this.leading0(this.state.minutes)} </div>
                <div className="Clock-value"> {this.leading0(this.state.seconds)} </div>
                <div className="Clock-label">Days</div>
                <div className="Clock-label">Hours</div>
                <div className="Clock-label">Minutes</div>
                <div className="Clock-label">Seconds</div>
            </div>
        </div>
        );
    }
}
