import React from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from 'views/HomeView'
import RecipeView from 'views/RecipeView'
import NotFoundView from 'views/NotFoundView'

import 'semantic-ui-css/semantic.min.css';
import './App.css'

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/recipe/:id" component={RecipeView} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  </Provider>
)
