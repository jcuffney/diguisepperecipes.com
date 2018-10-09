import { RECIPES_UPDATED, RECIPIES_CLEARED } from './types'

export default (state = {}, action) => {
  switch (action.type) {
    case RECIPES_UPDATED:
      return {
        ...action.payload
      }
    case RECIPIES_CLEARED:
      return []
    default:
      return state
  }
}
