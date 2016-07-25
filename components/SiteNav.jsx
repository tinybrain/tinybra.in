import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import './SiteNav.css'

class SiteNav extends React.Component {

  render () {
    const menuItems = [
      ['Home', '/'],
      ['Resumé', '/resume/'],
      ['Work', '/work/'],
      ['Contact', '/contact/'],
    ]

    const { location } = this.props

    return (
      <div className="docked navbar u-full-width">
        <div className="container">
          <ul className="navbar-list">
            {menuItems.map(([name, link], key) => {
              let style = location.pathname === prefixLink(link)
                ? 'navbar-link active'
                : 'navbar-link'
              return (
                <li key={key} className="navbar-item">
                  <Link to={link} className={style}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

SiteNav.propTypes = {
  location: React.PropTypes.object,
}

export default SiteNav
