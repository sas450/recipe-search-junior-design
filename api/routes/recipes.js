const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Recipe = require("../models/recipe");

router.get("/", (req, res, next) => {
  Recipe.find()
    .exec()
    .then(docs => {
      if (docs.length > 0) {
        console.log(docs);
        res.status(200).json(docs);
      } else {
        res.status(404).json({ message: "No entries in the database" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
  console.log(req.body.ingredientName);
  var ingredientSearchWords = req.body.ingredientName;
  var query = ingredientSearchWords.map(word => new RegExp(word.title, "i"));

  Recipe.find({ ingredient: { $all: query } })
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:recipeId", (req, res, next) => {
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  recipe
    .findByIdAndUpdate(req.params.recipeId, updateOps)
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:recipeId", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.recipeId)
    .exec()
    .then(docs => {
      if (docs) {
        console.log(docs);
        res.status(200).json(docs);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
