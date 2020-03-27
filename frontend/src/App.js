import React , { Component } from 'react';
import './App.css';
import Demo from "./components/Demo"
import Recipe from "./components/Recipe"
import Search from "./components/Search"
class App extends Component {
  state = {
    user_ingredients : []
  }

  updateIngredients = (e,v) => {
      this.setState({
          user_ingredients : v
      })
  }


  render() {
    return (
      <div className="App">
        <Search updateIngredients = {this.updateIngredients}/>
        <Recipe></Recipe>
      </div>
    );
  }
}

export default App;
