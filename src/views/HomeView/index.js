import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Search from 'components/Search'

import styles from './index.module.sass'

export class HomeView extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  static defaultProps = {}

  state = {
    query: ''
  }

  componentDidMount () {
    document.title = 'DiGuiseppe Recipes'
  }

  render () {
    return (
      <div className={styles.homeView}>
        <div>
          <h1 className={styles.title}>DiGuiseppe Recipes</h1>
          <Search
            history={this.props.history}
            search={() => {}}
            options={[]}
          />
        </div>
        <p className={styles.credits}>Made with <span className={styles.heart}>&hearts;</span> by Joe Cuffney</p>
      </div>
    )
  }
}

export default withRouter(HomeView)
