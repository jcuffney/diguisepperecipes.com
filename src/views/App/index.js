import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from 'views/HomeView'
import RecipeView from 'views/RecipeView'
import NotFoundView from 'views/NotFoundView'

import styles from './index.module.sass'

export default () => (
  <Router>
    <div className={styles.appView}>
      <div className={styles.blur} />
      <main className={styles.main}>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/recipe/:id' component={RecipeView} />
          <Route path='*' component={NotFoundView} />
        </Switch>
      </main>
    </div>
  </Router>
)
