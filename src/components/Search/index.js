import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import Async from 'react-select/lib/Async';

import './Search.css'

class Search extends Component {
  static propTypes = {
    search: PropTypes.func,
    history: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })).isRequired,
  }

  static defaultProps = {
    onSearch: () => {},
    history: () => {}
  }

  constructor(props){
    super(props)
    this.handleLoadOptions = this.handleLoadOptions.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFilterOption = this.handleFilterOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    inputValue: '',
  }

  loadingMessage({ inputValue }) {
    return `Searching the cookbook for ${inputValue}...`
  }

  placeholder() {
    return 'Search for a recipe...'
  }

  handleChange(value) {
    const { id } = value;
    this.props.history.push(`/recipe/${id}`)
  }

  handleFilterOption({ value }) {
    console.log((value.indexOf(this.state.inputValue) !== -1))
    return value.indexOf(this.state.inputValue) !== -1;
  }

  handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue })
    return inputValue;
  }

  async handleLoadOptions(query, cb) {
    const results = await this.props.search(query)
    cb(results)
  }

  render () {
    return (
      <Async 
        autoFocus={ true }
        placeholder={ this.placeholder() }
        loadingMessage={ this.loadingMessage } 
        maxMenuHeight={ 300 }
        isSearchable={ true }
        onChange={ this.handleChange }
        filterOption={ this.handleFilterOption }
        onInputChange={ this.handleInputChange }
        loadOptions={ debounce(this.handleLoadOptions, 750) } 
        getOptionLabel={ option => option.title }
        getOptionValue={ option => option.title.toLowerCase() }
        defaultOptions={ this.props.options }
      />
    )
  }
}

export default Search
