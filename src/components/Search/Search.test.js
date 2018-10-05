import React from 'react'
import Search from 'components/Search'
import { shallow } from 'enzyme'

describe('SearchView component', () => {
  let element

  beforeEach(() => {
    element = <Search />
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
