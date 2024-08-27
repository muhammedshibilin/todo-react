import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    secondName:"",
    thirdName:""
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value

    });
  };
  handleClick = () => console.log(this.state)

  render() {
    return (
      <form>
        <h1>edddddaaaaaaaaaa form folder</h1>
        <input
          type="text" name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text" name="secondName"
          value={this.state.secondName}
          onChange={this.handleChange}
        />
        <input
          type="text" name="thirdName"
          value={this.state.thirdName}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleClick}>
          subbbmiiitttttt
        </button>
      </form>
    );
  }
}

export default Form;
