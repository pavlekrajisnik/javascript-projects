import { URL_API } from "./config";
import { getJSON } from "./helpers";
export const state = {
  recipe:{},
};

export const loadRecipe = async function (id) {
  try{
    const data = await getJSON(`${URL_API}/${id}`)
    const {recipe} = data.data; //let recipe = data.data.recipe
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  }catch(err){
    alert(err);
  }
}