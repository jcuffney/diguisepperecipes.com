import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRecipes, searchRecipes } from 'actions/recipe'
import { Header } from 'semantic-ui-react'
import Search from 'components/Search'

// import './HomeView.css'
import styles from './index.module.sass'

export class HomeView extends Component {
  static propTypes = {
    recipes: PropTypes.array,
    getRecipes: PropTypes.func,
    searchRecipes: PropTypes.func,
    history: PropTypes.object
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
      <div className={styles.homeView}>
        <div>
          <Header as='h1' className={styles.title}>DiGuiseppe Recipes</Header>
          <Search
            history={this.props.history}
            search={searchRecipes}
            options={recipes}
          />
        </div>
        <p className={styles.credits}>Made with <span className={styles.heart}>&hearts;</span> by Joe Cuffney</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: Object.values(state.recipe)
})

export default withRouter(connect(mapStateToProps, { getRecipes, searchRecipes })(HomeView))
