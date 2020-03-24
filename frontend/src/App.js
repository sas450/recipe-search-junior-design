import React , { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import Demo from "./components/Demo"

//test
//sdfs
class App extends Component {
  state = {
    count: 2
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <Demo />
      </div>
    );
  }
}

export default App;
