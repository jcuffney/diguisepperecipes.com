import React from 'react'
import { Link } from 'react-router-dom'

import './NotFoundView.css'

export default (props) => (
  <div>
    <h1>404</h1>
    <Link to="/">Home</Link>
  </div>
)
