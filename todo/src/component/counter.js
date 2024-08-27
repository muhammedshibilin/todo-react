import React, { Component } from 'react'


 class Counter extends Component {
    state = {
        count:0 
    }
  increment = () => {
    this.setState({
        count:this.state.count+1
    })
  }
  decrement = () => {
    this.setState({
        count:this.state.count-1
    })
  }

  render() {
    return (
      <div>
        <h1>counder file</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>click me i will show you one thing</button>
        <button onClick={this.decrement}>click me i will show you one thing</button>
      </div>
    )
  }
}


export default Counter
