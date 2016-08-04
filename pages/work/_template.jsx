import React from 'react'
import MDReactComponent from 'markdown-react-js'

import { DebugNav } from 'components/Debug'
import { SubNav } from 'components/SubNav'
import { Title } from 'components/Title'

import mdconfig from 'components/markdown'

import data from '../../lib/data.js'

import './work.css'

class WorkTemplate extends React.Component { // eslint-disable-line
  render () {
    const { children, location, route, routes} = this.props // eslint-disable-line
    const nav = data.navmap[location.pathname]

    const rroute = routes.find(r => r.path === data.slashless(location.pathname))

    console.assert(nav)

    let subnav = []
    let childs = children

    if (location.pathname !== route.path) {
      subnav = <SubNav nav={nav} />
      childs = (
        <MDReactComponent
          markdownOptions={mdconfig.options}
          plugins={mdconfig.plugins}
          text={rroute.page.data.body}
          onIterate={mdconfig.handleIterate}
        />
      )
    }

    return (
      <div className="container">
        <DebugNav nav={nav} />
        <Title title="Work" path={route.path} />
        <br />
        {subnav}
        {childs}
      </div>
    )
  }
}

WorkTemplate.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
  routes: React.PropTypes.array,
}

export default WorkTemplate
