import React, { Component } from 'react'
import './todoApp.css'


class TodoApp extends Component {
    state = {
        input:"",
        items:[]
    }
 handleChange = event => {
  this.setState({
    input:event.target.value
  })
 }
 storeItem = event => {
    event.preventDefault()
    const{input} = this.state
    
    this.setState({
        items:[...this.state.items,input],
        input:""
    })
 }

 deleteItem = key => {
    
    this.setState({
        items:this.state.items.filter((data,index) => index!==key)
    })

 }

  render() {
    const {input,items} = this.state
    return (
      <div className='todo-container'>
       <h1>enter your plans</h1>
       <div>
        <form onSubmit={this.storeItem}>
        <input type='text' value={input} onChange={this.handleChange} placeholder='enter your plans'/>
        
        </form>
        <ul>
           {items.map((data,index) => (
            <li key={index}>{data}<button onClick={() => this.deleteItem(index)}>x</button></li>
           ))}
        </ul>
       </div>
      </div>
    )
  }
}

export default TodoApp
