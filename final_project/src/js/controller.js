import * as model from './model.js'
import searchView  from './views/searchView.js';
import '../sass/main.scss';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import AddRecipeView from './views/addRecipeView.js';
import addRecipeView from './views/addRecipeView.js';

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
    // recipeView.update(model.state.recipe);

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
    resultsView.render(model.getSearchResultsPage(1));
    paginationView.render(model.state.search);
  }catch (err) {
    console.log(err);
  }
}
const controlPagination = function(goToPage){
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}
const controlServings = function(newServings){
  model.updateServings(newServings);
  recipeView.render(model.state.recipe);
};

const controlAddBookmark = function(){
  //Store
  if(!model.state.recipe.bookmarked)
    { 
      model.addBookmark(model.state.recipe)
    }
    else
    {
      model.deleteBookmark(model.state.recipe.id)
    };
    //update
  recipeView.update(model.state.recipe);
  //render
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = function(newRecipe){
  console.log(newRecipe);
}
const init = function(){
  recipeView.addHandlerRander(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}
init();
// window.addEventListener("hashchange",controlRecipes);
// window.addEventListener("load",controlRecipes)

