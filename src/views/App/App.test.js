import React from 'react'
import App from 'views/App'
import { shallow } from 'enzyme'

describe('App', () => {
  let element

  beforeEach(() => {
    element = <App />
  })

  it('renders as expected', () => {
    shallow(element)
  })
})
