import React from "react";
import shortid from "shortid";

export default class Recipe extends React.Component {
  state = {
    loading: true,
    recipes: [],
    name: null,
    price: null
  };

  async componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "From ReactAPp",
        price: "999"
      })
    };

    const url = "http://localhost:8080/products";
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    this.setState({
      name: data.createdProduct.name,
      price: data.createdProduct.price,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.name) {
      return <div>didn't get a post</div>;
    }

    //this is how we access the user ingredient list
    //send these in a post request to the backend
    //should get a json object back with titles and image urls
    //use the componentDidMount above as a template
    console.log(this.props.user_ingredients);
    return (
      <div>
        <button onclick>POST DATA</button>
        <ul>
          <li> TITLE : {this.state.name}</li>
          <li> PRICE : {this.state.price}</li>
        </ul>
      </div>

      /*       <div>
        {}
        
        {this.state.recipes.map(recipe => (
          <div key={shortid.generate()} style={{display: "flex",}}>
            <div>{recipe.title}</div>
            <img src={recipe.url} style = {{width : 10 , height : 10}}/>
          </div>
        ))}
        
        }
      </div> */
    );
  }
}
