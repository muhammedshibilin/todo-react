// App.js
import React, { Component } from "react";
import Todo from "./component/todo"; 
import Counter from "./component/counter";
import Form from "./component/form";
import TodoApp from "./component/todoApp/todoApp";
class App extends Component {
  state = {
    hai: "hell00likj amrazz"
  };
  handleChange = () => {
    this.setState({
      hai:"podaa amrazzeeeeeeeee"
    })
  }
  render() {
    return (
      <div className="App">
        <h1>haaaai{this.state.hai}</h1>
        <Todo hello={this.state.hai} /> 
        <Counter />
        <button onClick={this.handleChange}>thott nokkedaaaaaaaaa</button>
        <Form />
        <TodoApp /> {/* Add this line to use the todoApp component */}
      </div>
    );
  }
}

export default App;
