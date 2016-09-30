import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import Social from './Social'

import './sitenav.css'

const Menu = (props) => {
  const { location } = props
  console.assert(location)

  const menuItems = [
    ['About', '/'],
    ['Work', '/work/'],
    ['Resume', '/resume/'],
  ]

  return (
    <div className="menu">
      {menuItems.map(([name, link], key) => {
        let style = location.pathname === prefixLink(link)
        ? 'active' : ''
        return (
          <div key={key} className="menu-item">
            <Link to={link} className={style}>{name}</Link>
          </div>
        )
      })}
    </div>
  )
}

Menu.propTypes = {
  location: React.PropTypes.object,
}

const SiteNav = (props) => {
  if (config.hideNav) {
    return null
  }

  return (
    <header className="site-nav sticky-top">
      <nav className="container">
        <Menu {...props} />
        <Social />
      </nav>
    </header>
  )
}

SiteNav.propTypes = {
  // location: React.PropTypes.object,
}

export default SiteNav
