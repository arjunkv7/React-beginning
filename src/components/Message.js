import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Hi Please subscribe ....",
            buttonName: "Subscribe"
        }
    };
    changeMessage() {
        this.setState({
            message: "Thank you for subscribing...",
            buttonName: "Unsubscribe"
        })
    }
    render() {
        return (
            <div>
                <h1>Hii this is a message from React </h1>
                <h4>{this.state.message}</h4>
                <button onClick={() =>{this.changeMessage()}}>{this.state.buttonName}</button>
            </div>

        )
    }
}
export default Message;