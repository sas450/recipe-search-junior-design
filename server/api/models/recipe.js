const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  url: String,
  ingredient: String
});

module.exports = mongoose.model("Recipe", recipeSchema);
