import React from 'react'
import { config } from 'config'
// import DebugLabel from '../components/DebugLabel'
import SiteNav from '../components/SiteNav'

import '../static/css/reeeset.css'
import '../static/css/base.css'
import '../static/css/type.css'

// import SiteNav from '../components/SiteNav'

class Template extends React.Component {
  render () {
    const { children } = this.props

    let nav = config.renderSiteNav
    ? <SiteNav {...this.props} /> : []

    // let title = config.renderTitles
    // ? <Title {...this.props} /> : []

    return (
      <div className="wrapper">
        {nav}
        {children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object,
}

export default Template
