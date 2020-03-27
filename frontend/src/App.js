import React , { Component } from 'react';
import './App.css';
import Demo from "./components/Demo"
import Recipe from "./components/Recipe"
import Search from "./components/Search"
class App extends Component {

  state = {
    ingredients : []
  }

  render() {
    return (
      <div className="App">
        <Search></Search>
        <Recipe></Recipe>
      </div>
    );
  }
}

export default App;
