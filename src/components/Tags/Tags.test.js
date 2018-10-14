import React from 'react'
import Tags from 'components/Tags'
import { shallow } from 'enzyme'

describe('SearchView component', () => {
  let element

  beforeEach(() => {
    element = <Tags />
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
