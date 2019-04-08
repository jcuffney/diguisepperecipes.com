import { RECIPES_UPDATED, RECIPIES_CLEARED } from './types'

const BASE_URL = 'https://api.diguisepperecipes.com/v1'

export const getRecipes = () => async dispatch => {
  const query = {
    query: {
      match_all: {}
    }
  }

  const recipes = await search(query)
    .then(response => response.hits.hits.map(item => item._source))
    .then(response => {
      let res = {}
      response.forEach(recipe => {
        res[recipe.id] = recipe
      })
      return res
    })

  dispatch({
    type: RECIPES_UPDATED,
    payload: recipes
  })
}

export const searchRecipes = searchTerm => async dispatch => {
  const query = {
    suggest: {
      recipe: {
        prefix: searchTerm,
        completion: {
          field: 'suggest'
        }
      }
    }
  }

  const recipes = await search(query)
    .then(response => response.suggest.recipe[0].options.map(item => item._source))

  return recipes
}

export const getRecipe = id => async dispatch => {
  const query = {
    query: {
      match: { id }
    }
  }

  const recipes = await search(query)
    .then(response => response.hits.hits.map(item => item._source))
    .then(response => {
      let res = {}
      response.forEach(recipe => {
        res[recipe.id] = recipe
      })
      return res
    })

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
  const queryStr = JSON.stringify(query)
  return fetch(`${BASE_URL}/search`, {
    method: 'post',
    body: queryStr
  })
    .then(response => response.json())
}
