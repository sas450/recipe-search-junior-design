import React from "react";
import shortid from "shortid";

export default class Recipe extends React.Component {
  state = {
    loading: true,
    recipes: []
  };

  async componentDidMount() {
    //this.props.user_ingredients[0].title
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredientName: "lemon"
      })
    };

    const url = "http://localhost:8080/recipes";
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    this.setState({
      recipes: data,
      loading: false
    });
  }

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

      const url = "http://localhost:8080/recipes";
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data);
      this.setState({
        recipes: data,
        loading: false
      });
    } else if(
      this.props.user_ingredients.length !==
        prevProps.user_ingredients.length &&
      this.props.user_ingredients.length === 0
    ) {
      this.setState({ loading: true });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.recipes) {
      return <div>didn't get a post</div>;
    }

    return (
      <div>
        {this.state.recipes.map(recipe => (
          <div key={shortid.generate()} style={{ display: "flex" }}>
            <a href={recipe.url}>{recipe.title}</a>
            <img src={recipe.img} style={{ width: 10, height: 10 }} />
          </div>
        ))}
      </div>
    );
  }
}
