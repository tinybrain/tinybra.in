import React from 'react'
import { Link } from 'react-router'

import navdata from './WorkNav.yaml'

import './WorkNav.css'

class WorkNav extends React.Component {
  constructor (props) {
    super(props)
    this.nav = { '/work/': null }
    navdata.forEach((e, i, a) => {
      const l = a.length
      this.nav[e.path] = {
        current: a[i],
        prev: a[(i - 1 + l) % l],
        next: a[(i + 1) % l]
      }
    })

    this.icons = {
      prev: '\u003c',
      next: '\u003e'
    }
  }

  renderNav (n, t) {
    if (!n) return null

    return (
      <Link className={`work-nav-${t}`} to={n[t].path}>
        {this.icons[t]}
      </Link>
    )
  }

  render () {
    const { location, children } = this.props
    const n = this.nav[location.pathname]

    return (
      <div className="work-nav">
        {children}
        {this.renderNav(n, 'prev')}
        {this.renderNav(n, 'next')}
      </div>
    )
  }
}

WorkNav.propTypes = {
  location: React.PropTypes.object,
  children: React.PropTypes.object,
}

export default WorkNav
