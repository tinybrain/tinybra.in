import React from 'react'
import './Title.css'

class Title extends React.Component {
  render () {
    const { title } = this.props
    console.log('Title says...', title, this.props)
    return (
      <div className="title">
        <h1>{title}</h1>
      </div>
    )
  }
}

Title.propTypes = {
  title: React.PropTypes.object.isRequired,
  route: React.PropTypes.object.isRequired,
}

export default Title
