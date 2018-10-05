import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './RecipeCard.css'

const RecipeCard = props => {
  const { id, title, author, imageUrl } = props
  return (
    <div>
      <Link to={`/recipe/${id}`}>
        <img src={imageUrl} alt={title} />
        <h4>{title}</h4>
        <h6>{author}</h6>
      </Link>
    </div>
  )
}

RecipeCard.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string
}

export default RecipeCard
