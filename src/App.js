import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [{ name: "a", age: 30 }, { name: "b", age: 20 }]
  };
  switchNameHandler = newName => {
    this.setState({
      person: [{ name: newName, age: 30 }, { name: "D", age: 20 }]
    });
  };
  nameChangedHandler = event => {
    this.setState({
      person: [{ name: event.target.value, age: 30 }, { name: "D", age: 20 }]
    });
  };
  render() {
    const style = {
      button: {
        backgroundColor: "red",
        padding: "10px 10px",
        border: "2px solid lightgeen",
        color: "green"
      },
      global: {
        display: "flex"
      }
    };
    return (
      <div style={style.global}>
        <button
          style={style.button}
          onClick={() => this.switchNameHandler("Teste")}
        >
          switch
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
