import '../sass/main.scss';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


///////////////////////////////////////
const showRecipe = async function() {
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
    const res = await fetch("https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8673");
    const data = await res.json();
    if(!res.ok) throw new Error(`${data.message} (${res.status})`)
    let {recipe} = data.data; //let recipe = data.data.recipe
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
  } catch (error) {
    console.log(error);
  }
}
showRecipe();
