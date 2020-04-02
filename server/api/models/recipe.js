const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  url: String,
  ingredient: String
});

var Recipe = mongoose.model("Recipe", recipeSchema);
var RecipeBag = [
  {

    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " mushrooms "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " artichoke hearts "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " garlic "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " small yellow onion "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " vegetable broth "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " olive oil "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " fettuccine "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " dried oregano "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " dried thyme "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " freshly cracked black pepper "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " fresh or frozen spinach "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " crushed red pepper (optional) "
  
  },
  {
  
    "title" :  " Spinach and Artichoke Wonderpot ",
    "url" :  " https://www.budgetbytes.com/spinach-artichoke-wonderpot/ ",
    "ingredient" :  " feta (optional) "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " garlic "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " mushrooms "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " olive oil "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " brown lentils "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " dried thyme "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " rubbed sage "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " Freshly cracked black pepper "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " vegetable broth "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " coconut milk "
  
  },
  {
  
    "title" :  " Lentils with Creamy Mushroom Gravy ",
    "url" :  " https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/ ",
    "ingredient" :  " salt to taste (about 1/2 tsp) "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " russet potatoes "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " salt (for cooking water) "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " garlic "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " extra virgin olive oil "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " dried rosemary "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " vegetable broth, warmed "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " freshly cracked black pepper "
  
  },
  {
  
    "title" :  " Olive Oil Mashed Potatoes ",
    "url" :  " https://www.budgetbytes.com/olive-oil-mashed-potatoes/ ",
    "ingredient" :  " salt to taste (about 3/4 tsp) "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " cooking oil "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " garlic "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " yellow onion "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " jalapeño (optional) "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " fire roasted diced tomatoes "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " tomato paste "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " beans (kidney, pinto, black) "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " chili powder* "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " cumin "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " oregano "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " salt "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " water "
  
  },
  {
  
    "title" :  " Chili Cornbread Skillet ",
    "url" :  " https://www.budgetbytes.com/chili-cornbread-skillet/ ",
    "ingredient" :  " shredded cheddar "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " butter, room temperature "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " powdered sugar "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " vanilla extract "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " water "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " salt "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " flour "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " pecans "
  
  },
  {
  
    "title" :  " Cinnamon Pecan Sandies ",
    "url" :  " https://www.budgetbytes.com/cinnamon-pecan-sandies/ ",
    "ingredient" :  " cinnamon "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " yellow onion "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " garlic "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " olive oil "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " carrots (about 4) "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " diced tomatoes "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " pearled barley "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " dried basil "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " dried oregano "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " freshly cracked pepper "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " vegetable broth "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " russet potato (about 3/4 lb.) "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " frozen green beans "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " frozen corn "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " frozen peas "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " lemon juice "
  
  },
  {
  
    "title" :  " Vegetable Barley Soup ",
    "url" :  " https://www.budgetbytes.com/vegetable-barley-soup/ ",
    "ingredient" :  " fresh parsley (optional garnish) "
  
  },
  {
  
    "title" :  " Teriyaki Meatball Bowls ",
    "url" :  " https://www.budgetbytes.com/teriyaki-meatball-bowls/ ",
    "ingredient" :  " ground pork  "
  
  },
  {
  
    "title" :  " Teriyaki Meatball Bowls ",
    "url" :  " https://www.budgetbytes.com/teriyaki-meatball-bowls/ ",
    "ingredient" :  " egg  "
  
  },
  {
  
    "title" :  " Teriyaki Meatball Bowls ",
    "url" :  " https://www.budgetbytes.com/teriyaki-meatball-bowls/ ",
    "ingredient" :  " breadcrumbs  "
  
  },
  {
  
    "title" :  " Teriyaki Meatball Bowls ",
    "url" :  " https://www.budgetbytes.com/teriyaki-meatball-bowls/ ",
    "ingredient" :  " garlic, minced "
  
  },
  {
  
    "title" :  " Teriyaki Meatball Bowls ",
    "url" :  " https://www.budgetbytes.com/teriyaki-meatball-bowls/ ",
    "ingredient" :  " grated fresh ginger  "
  
  },
  {
  
    "title" :  " Teriyaki Meatball Bowls ",
    "url" :  " https://www.budgetbytes.com/teriyaki-meatball-bowls/ ",
    "ingredient" :  " soy sauce  "
  
  },
  {
  
    "title" :  " Teriyaki Meatball Bowls ",
    "url" :  " https://www.budgetbytes.com/teriyaki-meatball-bowls/ ",
    "ingredient" :  " green onions, sliced  "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " garlic "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " grated fresh ginger "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " yellow onion "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " carrots (about 1/2 lb.) "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " cabbage (about 4 cups sliced) "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " olive oil "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " curry powder (mild or hot) "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " frozen peas "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " butter "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " salt and pepper to taste "
  
  },
  {
  
    "title" :  " Curried Cabbage ",
    "url" :  " https://www.budgetbytes.com/curried-cabbage/ ",
    "ingredient" :  " cilantro "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " butter "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " garlic, minced "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " paprika "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " salt "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " freshly cracked pepper "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " fresh lemon "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " chopped fresh parsley (optional) "
  
  },
  {
  
    "title" :  " Garlic Butter Baked Chicken Thighs ",
    "url" :  " https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/ ",
    "ingredient" :  " boneless, skinless chicken thighs (about 1.25 lbs.) "
  
  }
];

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
