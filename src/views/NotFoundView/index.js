import React from 'react'
import { Link } from 'react-router-dom'

import './NotFoundView.css'

export default (props) => (
  <div className="not-found-view">
    <div className="not-found-wrapper">
      <h1 className="title">404</h1>
      <Link to="/" className="link-home">Home</Link>
    </div>
  </div>
)
