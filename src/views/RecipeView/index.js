import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header, Container, Icon, Divider } from 'semantic-ui-react'
import { getRecipe } from 'actions/recipe'
import Ingredients from 'components/Ingredients'
import Steps from 'components/Steps'
import Tags from 'components/Tags'

import './RecipeView.css'

export class RecipeView extends Component {
  static propTypes = {
    id: PropTypes.string,
    recipe: PropTypes.object,
    getRecipe: PropTypes.func
  }

  static defaultProps = {
    id: '',
    recipe: {},
    getRecipe: () => {}
  }

  componentDidMount () {
    const { id, recipe } = this.props
    this.props.getRecipe(id)
    if (recipe && recipe.title) {
      const { title } = recipe
      document.title = `${title} - Diguiseppe Recipes`
    }
  }

  render () {
    const { recipe } = this.props
    if (!recipe) return null
    const {
      title,
      author,
      ingredients,
      steps,
      description,
      category,
      duration,
      tags
    } = recipe

    const ts = tags && category ? [ ...tags, ...category ] : []

    return (
      <div className='recipe-view transition-wrapper'>
        <Container>
          <Header as='h1' className='white'>
            <Link to='/'>
              <Icon name='arrow left' />
            </Link>
            { title }
          </Header>
          <Header as='h5' className='white'>By: { author }</Header>
          {duration && (
            <p>
              Cook Time: { duration.time } { duration.unit }
            </p>
          )}
          <Tags tags={ts} />
          <p>{ description }</p>
          <Divider />
          <Ingredients ingredients={ingredients} />
          <Steps steps={steps} />
          <p className='center'>Made with <span className='heart'>&hearts;</span> by Joe Cuffney</p>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const recipes = state.recipe
  const { match: { params: { id } } } = props
  const recipe = Object.values(recipes).find(item => (id === item.id))
  return { id, recipe }
}

export default connect(mapStateToProps, { getRecipe })(RecipeView)
