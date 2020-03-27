import React from "react";
import shortid from "shortid";

export default class Recipe extends React.Component {
  state = {
    loading: true,
    recipes: []
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ recipes: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.recipes.length) {
      return <div>didn't get a person</div>;
    }

    //this is how we access the user ingredient list 
    //send these in a post request to the backend 
    //should get a json object back with titles and image urls 
    //use the componentDidMount above as a template
    console.log(this.props.user_ingredients)
    return (

      <div>
        Placeholder 
      </div>

/*       <div>
        {}
        
        {this.state.recipes.map(recipe => (
          <div key={shortid.generate()} style={{
            display: "flex",
          }}>
            <div>{recipe.title}</div>
            <img src={recipe.url} style = {{width : 10 , height : 10}}/>
          </div>
        ))}
        
        }
      </div> */
    );
  }
}
