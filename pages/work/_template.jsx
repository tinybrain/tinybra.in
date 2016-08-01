import React from 'react'
import { Link } from 'react-router'
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io'

import data from '../../lib/data.js'

import './work.css'

const icons = {
  prev: <IoChevronLeft />,
  next: <IoChevronRight />,
}

const renderNavLink = (type, nav) => {
  const navlink = nav[type]
  if (!navlink) return null
  return (
    <Link key={type} className={`work-nav-${type}`} to={navlink}>
      {icons[type]}
    </Link>
  )
}

const renderSubNav = (path, navmap) => {
  const nav = navmap[path]
  console.log('renderSubNav', nav)
  if (!nav) return null
  const navLinks = ['prev', 'next'].map(type => renderNavLink(type, nav))

  return (
    <div className="work-nav">
      <h2>{nav.title}</h2>
      {navLinks}
    </div>
  )
}

class WorkTemplate extends React.Component {

  render () {
    const { children, location, route } = this.props

    const subnav = []
    if (location.pathname !== route.path) {
      subnav.push(renderSubNav(location.pathname, data.navmap))
    }

    return (
      <div className="container">
        <div className="title">
          <Link to={route.path}>
            <h1>Work</h1>
          </Link>
        </div>
        <br />
        {subnav}
        {children}
      </div>
    )
  }
}

WorkTemplate.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default WorkTemplate
