import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Grid, Segment, Checkbox, Divider } from 'semantic-ui-react'

class Steps extends Component {
  static propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    steps: []
  }

  renderStep () {
    const { steps } = this.props
    return steps.map((str, idx) => {
      return <Checkbox label={str} key={`step-${idx}`} />
    })
  }

  render () {
    if (!this.props.steps.length) return null
    return (
      <>
        <Header>Instructions:</Header>
        <Divider />
        <Grid stackable columns={1}>
          <Grid.Column>
            <Segment>
              { this.renderStep() }
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default Steps
