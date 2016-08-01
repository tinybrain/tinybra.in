import React from 'react'
import { Link } from 'react-router'
import './Debug.css'

const DebugNav = (props) => {
  const { nav } = props
  const links = ['path', 'parent', 'prev', 'next'].map(type => {
    const path = nav[type]
    const link = path ? <Link to={path}>{type}: {path}</Link> : `${type}:`
    return (
      <div key={type}>
        {link}
      </div>
    )
  })

  return (
    <div className="debug-nav">
      {links}
    </div>
  )
}

DebugNav.propTypes = {
  nav: React.PropTypes.object.isRequired,
}

export default { DebugNav }
