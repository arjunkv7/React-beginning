import { React, Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message :"hii"
        }
        this.clickFunction = this.clickFunction.bind(this)
    }

    clickFunction (e) {
        this.setState({
            message: "Thank you for clicking the button"
        })
    }

    render(){
        return(
           <form onSubmit={this.clickFunction}>
                <label>{this.state.message}</label>
                <input type={String} ></input>
                <button onClick={ this.clickFunctionclickFunction }>Submit</button>
           </form>
        )
    }
}

export default Form;