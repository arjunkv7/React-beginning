import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName:"Parent"
        }

        this.getParentName = this.getParentName.bind(this)
    }

    getParentName(childName) {
        alert(`Hellow ${this.state.parentName} from ${childName}`)
        console.log("hiiii");
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.getParentName}/>
      </div>
    )
  }
}

export default ParentComponent