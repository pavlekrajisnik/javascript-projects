import * as model from './model.js'
import searchView  from './views/searchView.js';
import '../sass/main.scss';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';

if (module.hot) {
  module.hot.accept();
}

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

  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery()
    if(!query) return;

    await model.loadSearchResults(query);

    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  }catch (err) {
    console.log(err); 
  }
}
const init = function(){
  recipeView.addHandlerRander(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();
// window.addEventListener("hashchange",controlRecipes);
// window.addEventListener("load",controlRecipes)

