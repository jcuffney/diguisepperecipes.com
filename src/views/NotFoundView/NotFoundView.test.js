import React from 'react'
import NotFound from 'views/NotFoundView'
import { shallow } from 'enzyme'

describe('NotFoundView component', () => {
  let element

  beforeEach(() => {
    element = <NotFound />
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
