import * as model from './model.js'
import recipeView  from './views/recipeView.js';
import '../sass/main.scss';
import recipeView from './views/recipeView.js';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////
const controlRecipes = async function() {
  // fetch("https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8673")
  //   .then(response => {
  //     if (!response.ok) throw new Error(`Greška: ${response.status}`);
  //      response.json();
  //   })
  //   .then(data => {
  //     console.log("RECEPT:", data);
  //   })
  //   .catch(err => {
  //     console.error("❌ Greška u .then lancu:", err.message);
  //   });
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    //Loading recipe
      await model.loadRecipe(id);
    // Rendering recipe

    recipeView.render(model.state.recipe);
   //const recipeView = new recipeView(model.state.recipe);

  } catch (error) {
    console.log(error);
  }
};

const init = function(){
  recipeView.addHandlerRander(controlRecipes);
}
init();
// window.addEventListener("hashchange",controlRecipes);
// window.addEventListener("load",controlRecipes)

