import React from 'react'
import { RecipeView } from 'views/RecipeView'
import { shallow } from 'enzyme'

describe('RecipeView component', () => {
  let element
  const recipe = {
    id: '1234-1234-12341234-123412341234',
    title: 'test',
    author: 'test',
    ingredients: [],
    steps: []
  }

  beforeEach(() => {
    element = <RecipeView id={recipe.id} recipe={recipe}/>
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
