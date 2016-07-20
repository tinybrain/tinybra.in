import React from 'react'
import { RouteHandler, Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import './style.css'

// <Link to="/" className={ location.pathname === prefixLink('/') ? "current" : null }> Articles

class WorkList extends React.Component {
    render() {

      let pages = this.props.route.pages

      const filtered = pages.filter((page) => access(page, 'data.category') === 'work')
      const sorted = sortBy(filtered, (page) => access(page, 'data.date')).reverse()

      let pageSections = []

      sorted.forEach((page) => {

        const title = access(page, 'data.title') || page.path
        const description = access(page, 'data.description')

        pageSections.push(
          <div className='work-list-item'>
            <p>{ title }</p>
          </div>
        )
      })

      console.log(sorted)

      return (
        <div>
          This is the work list!

          { pageSections }
        </div>
      )
    }
}


/*
SiteNav.propTypes = {
    location: React.PropTypes.object,
}
*/

export default WorkList
