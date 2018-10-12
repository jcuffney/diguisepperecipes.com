import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import './NotFoundView.css'

export default (props) => (
  <div className="not-found-view transition-wrapper">
    <div>
      <Header as='h1' className="title">404</Header>
      <Link to="/" className="link-home">Home</Link>
    </div>  
  </div>
)
