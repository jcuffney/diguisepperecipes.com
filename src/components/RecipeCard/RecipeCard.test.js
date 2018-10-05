import React from 'react'
import RecipeCard from 'components/RecipeCard'
import { shallow } from 'enzyme'

describe('RecipieCard component', () => {
  let element

  beforeEach(() => {
    element = <RecipeCard />
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
