import React, { Component } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import Search from "./components/Search";

class App extends Component {
  state = {
    user_ingredients: []
  };

  updateIngredients = (e, v) => {
    this.setState({
      user_ingredients: v
    });
  };

  render() {
    return (
      <div className="App">
        <Search updateIngredients={this.updateIngredients} />
        <Recipe user_ingredients={this.state.user_ingredients} />
      </div>
    );
  }
}

export default App;
