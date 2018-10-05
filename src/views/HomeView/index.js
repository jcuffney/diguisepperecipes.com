import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRecipes } from 'actions/recipe'
import Search from 'components/Search'
import RecipeCard from 'components/RecipeCard'

import './HomeView.css'

export class HomeView extends Component {
  static propTypes = {
    recipes: PropTypes.array,
    getRecipes: PropTypes.func
  }

  static defaultProps = {
    getRecipes: () => {},
    recipie: []
  }

  componentDidMount () {
    this.props.getRecipes()
  }

  handleSearch (query) {
    console.log('handling search', query)
  }

  renderRecipes (recipes) {
    if (!recipes) return null
    return recipes.map((recipe, idx) => {
      return <RecipeCard { ...recipe } key={`home-${idx}`} />
    })
  }

  render () {
    const { recipes } = this.props
    if (!recipes) return null
    return (
      <div className="home-view">
        <div>
          <p>Search: <Search onSearch={this.handleSearch} /></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe
})

export default connect(mapStateToProps, { getRecipes })(HomeView)
