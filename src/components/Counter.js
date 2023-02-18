import React, { Component } from "react";

class Counter extends Component {
    constructor(params) {
        super(params)

        this.state = {
            count: 0,
        }

    }

    incrementCount() {

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    decrementCount() {
        this.setState({
            count: this.state.count - 1
        }, (prevState) => {
            console.log(prevState)
        })
    }

    incrementFive() {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                Count - {this.state.count} <br></br>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => this.decrementCount()}>Decrement</button>
            </div>
        )
    }
}

export default Counter;