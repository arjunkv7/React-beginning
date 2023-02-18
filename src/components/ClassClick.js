import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message :"Hello"
        }
    }
     clickFunction() {
        this.setState({
            message:"good bi"
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickFunction.bind(this)}>ClassClick</button>
      </div>
    )
  }
}

export default ClassClick