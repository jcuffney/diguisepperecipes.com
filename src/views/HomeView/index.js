import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getRecipes, searchRecipes } from 'actions/recipe'
import { Header } from 'semantic-ui-react'
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
    document.title = 'DiGuiseppe Recipes'
  }

  render () {
    const { recipes, searchRecipes } = this.props
    if (!recipes) return null
    return (
      <div className="home-view transition-wrapper">
        <div>
          <Header as='h1' className="title">DiGuiseppe Recipes</Header>
          <Search 
            history={ this.props.history }
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

export default withRouter(connect(mapStateToProps, { getRecipes, searchRecipes })(HomeView))
