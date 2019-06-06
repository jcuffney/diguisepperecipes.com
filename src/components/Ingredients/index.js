import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Grid, Segment, Checkbox, Divider } from 'semantic-ui-react'

class Ingredients extends Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    ingredients: []
  }

  renderIngredient (left) {
    const { ingredients } = this.props
    const SIDE = left ? 0 : 1
    return ingredients.map((str, idx) => {
      if (idx % 2 === SIDE) return null
      return <Checkbox label={str} key={`ingr-${idx}`} />
    })
  }

  render () {
    if (!this.props.ingredients.length) return null
    return (
      <>
        <Header>Ingredients:</Header>
        <Divider />
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment>
              { this.renderIngredient(true) }
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              { this.renderIngredient(false) }
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default Ingredients
