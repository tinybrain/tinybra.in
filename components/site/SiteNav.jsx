import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './sitenav.css'

class SiteNav extends React.Component {

  render () {
    if (config.hideNav) {
      return null
    }

    const menuItems = [
      ['Home', '/'],
      ['Resume', '/resume/'],
      ['Work', '/work/'],
      ['Contact', '/contact/'],
    ]

    const { location } = this.props

    return (
      <nav className="site-nav">
        <ul className="site-nav container">
          {menuItems.map(([name, link], key) => {
            let style = location.pathname === prefixLink(link)
            ? 'site-nav active'
            : 'site-nav'
            return (
              <li key={key} className="top-link active">
                <Link to={link} className={style}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

SiteNav.propTypes = {
  location: React.PropTypes.object,
}

export default SiteNav
