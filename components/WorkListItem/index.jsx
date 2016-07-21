import React from 'react'
import { RouteHandler, Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'

// <Link to="/" className={ location.pathname === prefixLink('/') ? "current" : null }> Articles

class WorkListItem extends React.Component {

    render () {

      console.log(this.props)

    return (
      <div className="work-list-item ">
        <h3>{ title }</h3>
        <p dangerouslySetInnerHTML={ {__html: body } } />
      </div>
    )
  }
}

/*
SiteNav.propTypes = {
    location: React.PropTypes.object,
}
*/

export default WorkListItem
