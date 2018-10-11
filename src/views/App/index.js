import React from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomeView from 'views/HomeView'
import RecipeView from 'views/RecipeView'
import NotFoundView from 'views/NotFoundView'

import 'semantic-ui-css/semantic.min.css';
import './App.css'

export default () => (
  <Provider store={store}>
    <Router>
      <Route render={({location}) => (
          <div className='app-view'>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>

              <Switch key={location.key} location={location}>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/recipe/:id" component={RecipeView} />
                <Route path="*" component={NotFoundView} />
              </Switch>

            </CSSTransition>
          </TransitionGroup>
          </div>
        )}
      />
    </Router>
  </Provider>
)
