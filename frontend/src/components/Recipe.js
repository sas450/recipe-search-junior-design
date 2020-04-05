import React from "react";
import shortid from "shortid";
import "../basic-grid.css";

export default class Recipe extends React.Component {
  state = {
    loading: true,
    recipes: []
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.user_ingredients.length !==
        prevProps.user_ingredients.length &&
      this.props.user_ingredients.length > 0
    ) {
      console.log("im updating");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredientName: this.props.user_ingredients[0].title
        })
      };

      const url = "https://recipesearchenginedesign.herokuapp.com/recipes";
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data);
      this.setState({
        recipes: data,
        loading: false
      });
    } else if (
      this.props.user_ingredients.length !==
        prevProps.user_ingredients.length &&
      this.props.user_ingredients.length === 0
    ) {
      this.setState({ loading: true });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>input some ingredients</div>;
    }

    if (!this.state.recipes) {
      return <div>didn't get a post</div>;
    }

    return (
      <div class="basic-grid">
        {this.state.recipes.map(recipe => (
          <div class="card" key={shortid.generate()}>
            <img src={recipe.img} style={{ width: 200, height: 150 }} />
            <a href={recipe.url}>{recipe.title}</a>
          </div>
        ))}
      </div>
    );
  }
}
