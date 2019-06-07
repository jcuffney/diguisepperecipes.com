import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    tags: []
  }

  renderTags () {
    const { tags } = this.props
    return tags.map((str, idx) => {
      return (
        <Label as='a' color='black' tag key={` tag-${idx}`}>
          {str}
        </Label>
      )
    })
  }

  render () {
    if (!this.props.tags.length) return null
    return (
      <div className='tags'>
        { this.renderTags() }
      </div>
    )
  }
}

export default Tags
