import React from 'react'
import { Link } from 'react-router'
import './SubNav.css'

import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io'

const icons = {
  prev: <IoChevronLeft />,
  next: <IoChevronRight />,
}

const SubNavLink = (props) => {
  const { type, nav } = props
  const navlink = nav[type]
  console.assert(navlink)

  return (
    <Link key={type} className={`work-nav-${type}`} to={navlink}>
      {icons[type]}
    </Link>
  )
}

SubNavLink.propTypes = {
  nav: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
}

const SubNav = (props) => {
  const { nav } = props
  console.assert(nav)
  return (
    <div className="work-nav">
      <h2>{nav.title}</h2>
      <SubNavLink type="prev" nav={nav} />
      <SubNavLink type="next" nav={nav} />
    </div>
  )
}

SubNav.propTypes = {
  nav: React.PropTypes.object.isRequired,
}

export default { SubNav }
