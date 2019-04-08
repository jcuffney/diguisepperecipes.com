import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import Async from 'react-select/lib/Async';

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

  handleChange(value) {
    const { id } = value;
    if(id) this.props.history.push(`/recipe/${id}`)
  }

  handleFilterOption(candidate, input) {
    console.log(candidate, input)
    return true;
  }

  handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue })
    return inputValue;
  }

  async handleLoadOptions(query, cb) {
    const results = await this.props.search(query)
    console.log(results);
    cb(results)
  }

  render () {
    return (
      <Async 
        autoFocus={ true }
        className='search'
        placeholder={ 'Search for a recipe...' }
        loadingMessage={ ({ inputValue }) => `Searching for ${ inputValue }` }
        maxMenuHeight={ 300 }
        isSearchable={ true }
        cacheOptions={ true }
        ignoreCase={ true }
        ignoreAccents={ true }
        onChange={ this.handleChange }
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
