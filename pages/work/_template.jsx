import React from 'react'
import { DebugNav } from '../../components/Debug'
import { SubNav } from '../../components/SubNav'
import { Title } from '../../components/Title'

import data from '../../lib/data.js'

import './work.css'

class WorkTemplate extends React.Component {

  render () {
    const { children, location, route } = this.props
    const nav = data.navmap[location.pathname]
    console.assert(nav)

    let subnav = []
    if (location.pathname !== route.path) {
      subnav = <SubNav nav={nav} />
    }

    return (
      <div className="container">
        <DebugNav nav={nav} />
        <Title title="Work" path={route.path} />
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
