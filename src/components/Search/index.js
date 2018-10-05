import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

import './Search.css'

class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func
  }

  static defaultProps = {
    onSearch: () => {}
  }

  constructor (props) {
    super(props)
    this.debounce = debounce(props.onSearch, 500, { leading: false })
  }

  state = {
    query: ''
  }

  handleChange = event => {
    const val = event.target.value
    this.setState({ query: val })
    this.debounce(event.target.val)
  }

  render () {
    const { query } = this.state
    return (
      <input type="text" onChange={this.handleChange} value={query} />
    )
  }
}

export default Search
