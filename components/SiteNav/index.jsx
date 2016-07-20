import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

// <Link to="/" className={ location.pathname === prefixLink('/') ? "current" : null }> Articles

class SiteNav extends React.Component {
    render() {
        const menuItems = [
          ['Home', '/'],
          ['Resumé', '/resume/'],
          ['Work', '/work/'],
          ['Contact', '/contact/']
        ]
        const { location } = this.props

        return (
          <nav className='top-nav'>
            <ul>
              { menuItems.map(function([name, ref], key) {
                  let active = location.pathname === prefixLink(ref) ? "active" : null
                  return <li><Link key={key} to={ref} className={active}>{name}</Link></li>
              })}
            </ul>
          </nav>
          )
    }
}


/*
SiteNav.propTypes = {
    location: React.PropTypes.object,
}
*/

export default SiteNav
