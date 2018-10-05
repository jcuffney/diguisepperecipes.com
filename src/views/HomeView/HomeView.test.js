import React from 'react'
import { HomeView } from 'views/HomeView'
import { shallow } from 'enzyme'

describe('HomeView component', () => {
  let element

  beforeEach(() => {
    element = <HomeView />
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
