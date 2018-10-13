import React from 'react'
import Ingredients from 'components/Ingredients'
import { shallow } from 'enzyme'

describe('SearchView component', () => {
  let element

  beforeEach(() => {
    element = <Ingredients />
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
