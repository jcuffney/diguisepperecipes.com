import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import Async from 'react-select/async'

class Search extends Component {
  static propTypes = {
    search: PropTypes.func,
    history: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })).isRequired
  }

  static defaultProps = {
    onSearch: () => {},
    history: () => {}
  }

  state = {
    inputValue: ''
  }

  handleChange = ({ id }) => {
    if (id) this.props.history.push(`/recipe/${id}`)
  }

  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '')
    this.setState({ inputValue })
    return inputValue
  }

  handleLoadOptions = async (query, cb) => {
    const results = await this.props.search(query)
    cb(results)
  }

  render () {
    return (
      <Async
        autoFocus
        className='search'
        placeholder={'Search for a recipe...'}
        loadingMessage={({ inputValue }) => `Searching for ${inputValue}`}
        maxMenuHeight={300}
        isSearchable
        cacheOptions
        ignoreCase
        ignoreAccents
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        loadOptions={debounce(this.handleLoadOptions, 750)}
        getOptionLabel={option => option.title}
        getOptionValue={option => option.title.toLowerCase()}
        defaultOptions={this.props.options}
      />
    )
  }
}

export default Search
