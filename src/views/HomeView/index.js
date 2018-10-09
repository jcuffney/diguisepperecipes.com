import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRecipes, searchRecipes } from 'actions/recipe'
import Search from 'components/Search'

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

  render () {
    const { recipes, searchRecipes } = this.props
    if (!recipes) return null
    return (
      <div className="home-view">
        <div className="search-wrapper">
          <h1 className="title">DiGuiseppe Recipes</h1>
          <Search 
            search={ searchRecipes } 
            options={ recipes } 
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: Object.values(state.recipe)
})

export default connect(mapStateToProps, { getRecipes, searchRecipes })(HomeView)
