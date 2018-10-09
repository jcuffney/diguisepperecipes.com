import { RECIPES_UPDATED, RECIPIES_CLEARED } from './types'

const BASE_URL = 'https://api.diguisepperecipes.com/v1'

export const getRecipes = () => async dispatch => {

  const query = {
    query: {
      match_all: {}
    }
  }

  const recipes = await search(query)
    .then(response => { 
      let res = {}
      response.forEach(recipe => {
        res[recipe.id] = recipe;
      });
      return res;
    })
  
  dispatch({
    type: RECIPES_UPDATED,
    payload: recipes
  })
}

export const searchRecipes = searchTerm => async dispatch => {

  const query = {
    query: {
      match: {
        title: searchTerm
      }
    }
  }

  const recipes = await search(query)

  return recipes;
}

export const getRecipe = id => async dispatch => {
  const query = {
    query: {
      match: { id }
    }
  }

  const recipes = await search(query)


  dispatch({
    type: RECIPES_UPDATED,
    payload: recipes
  })
}

export const clearRecipies = () => {
  return {
    type: RECIPIES_CLEARED
  }
}


// -----------------------------------------------------------------------------
// helpers
// -----------------------------------------------------------------------------

const search = async query => {
  const queryStr = JSON.stringify(query);
  return await fetch(`${BASE_URL}/search`, {
    method: 'post',
    body: queryStr
  })
  .then(response => response.json())

};