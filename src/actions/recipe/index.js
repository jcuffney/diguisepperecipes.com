import { RECIPES_UPDATED, RECIPIES_CLEARED } from './types'

const BASE_URL = 'https://api.diguisepperecipes.com/v1'

export const getRecipes = () => async dispatch => {

  const query = {
    query: {
      match_all: {}
    }
  }

  const recipes = await search(query)
    .then(recipe => ([ recipe ]))
    
  dispatch({
    type: RECIPES_UPDATED,
    payload: recipes
  })
}

export const getRecipe = id => async dispatch => {
  const query = {
    query: {
      match: { id }
    }
  }

  const recipes = await search(query)
    .then(recipe => ([ recipe ]))
    
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

// helper
const search = async query => {
  const queryStr = JSON.stringify(query);
  return await fetch(`${BASE_URL}/search`, {
    method: 'post',
    body: queryStr
  })
  .then(response => response.json())
};