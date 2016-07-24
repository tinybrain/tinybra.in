import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './SiteNav.css'

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
          <div className='u-full-width navbar'>
            <div className='container'>
              <ul className='navbar-list'>
                { menuItems.map(function([name, link], key) {
                    let style = location.pathname === prefixLink(link) ? 'active navbar-list' : 'navbar-list'
                    return <li key={key} className="navbar-link"><Link to={link} className={style}>{name}</Link></li>
                })}
              </ul>
            </div>
          </div>
        )
    }
}


/*
SiteNav.propTypes = {
    location: React.PropTypes.object,
}
*/

export default SiteNav
