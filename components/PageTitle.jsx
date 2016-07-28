import React from 'react'
import './PageTitle.css'

class PageTitle extends React.Component {
  render () {
    console.log('<PageTitle says... />', this.props)
    const { title } = this.props

    return (
      <div className="page-title">
        <h1>{title}</h1>
      </div>
    )
  }
}

PageTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
}

export default PageTitle
