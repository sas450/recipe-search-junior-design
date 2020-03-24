import React , { Component } from 'react';
import './App.css';
import Demo from "./components/Demo"
import Recipe from "./components/Recipe"

//test
//sdfs
class App extends Component {

  render() {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Demo />
        </div>

        <Recipe ></Recipe>
      </div>
    );
  }
}

export default App;
