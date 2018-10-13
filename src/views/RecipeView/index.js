import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header, Image, Container, Icon, Grid, Segment, Divider } from 'semantic-ui-react'
import { getRecipe } from 'actions/recipe'
import Ingredients from 'components/Ingredients'
import Steps from 'components/Steps'

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

  render () {
    const { recipe } = this.props
    if (!recipe) return null
    const {
      title,
      author,
      imageUrl,
      ingredients,
      steps,
      description,
    } = recipe

    return (
      <div className="recipe-view transition-wrapper">
        <Container>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <Header as='h1' className='white'>
                <Link to="/">
                  <Icon name='arrow left' size='big' />
                </Link>{ title }</Header>
                <Header as='h3' className='white'>{ author }</Header>
                <Divider />
                <p>{ description }</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src={ imageUrl } />
              </Segment>
            </Grid.Column>
          </Grid>
          <Ingredients ingredients={ingredients} />
          <Steps steps={ steps } />
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
