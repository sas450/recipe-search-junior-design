const mongoose = require("mongoose");
var RecipeBag = require("/Users/samirsherlekar/Documents/Projects/recipe_search_engine/data/bb.json");

const recipeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  url: String,
  img: String,
  ingredient: String
});

var Recipe = mongoose.model("Recipe", recipeSchema);
Recipe.collection.deleteMany({});
Recipe.collection.insertMany(RecipeBag, onInsert);

function onInsert(err, docs) {
  if (err) {
    // TODO: handle error
  } else {
    console.info("%d Recipes were successfully stored.", docs.length);
  }
}

module.exports = Recipe;
