import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import { getRecipe } from 'actions/recipe'

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
      const { title } = recipe;
      document.title = `${ title } - Diguiseppe Recipes`
    } 
  }

  renderImage (imageUrl, title) {
    if (!imageUrl) return null
    return <div><img src={ imageUrl } alt={ title } /></div>
  }

  renderSteps (list) {
    if (!list) return null
    return (
      <div>
        <h5>Steps:</h5>
        <div className="list">
          <ul>
            { list.map((item, idx) => (<li key={`step-${idx}`}>{ item }</li>)) }
          </ul>
        </div>
      </div>
    )
  }

  renderTags (list) {
    if (!list) return null
    return (
      <div>
        <h5>Tags:</h5>
        <div className="list">
          <ul>
            { list.map((item, idx) => (<li key={`step-${idx}`}>{ item }</li>)) }
          </ul>
        </div>
      </div>
    )
  }

  renderCategories (list) {
    if (!list) return null
    return (
      <div>
        <h5>Categories:</h5>
        <div className="list">
          <ul>
            { list.map((item, idx) => (<li key={`step-${idx}`}>{ item }</li>)) }
          </ul>
        </div>
      </div>
    )
  }

  renderIngredients (list) {
    if (!list) return null
    return (
      <div>
        <h5>Ingredients:</h5>
        <div className="list split">
          <ul>
            { list.map((item, idx) => {
              const { amount = '', unit = '', ingredient = '', optional } = item
              return (
                <li key={`ingr-${idx}`}>{ `${amount} ${unit} ${ingredient} ${optional ? ' * (optional)' : ''}` }</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  render () {
    const { recipe } = this.props
    if (!recipe) return null
    const {
      title,
      steps,
      author,
      ingredients,
      imageUrl,
      duration,
      tags,
      category
    } = recipe

    return (
      <div className="recipe-view transition-wrapper">
        <Header as='h1' className='white'>{ title }</Header>
        <Header as='h3' className='white'>{ author }</Header>
        { duration && <h3>{ `${duration.time} ${duration.unit}` }</h3> }
        <Link to="/">Back</Link>
        <br />
        { this.renderImage(imageUrl) }
        <br />
        { this.renderIngredients(ingredients) }
        { this.renderSteps(steps) }
        <hr />
        { this.renderTags(tags) }
        { this.renderCategories(category) }
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
