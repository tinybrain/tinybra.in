import React from 'react'
import SiteNav from 'components/site/SiteNav'
import { config } from 'config'

import 'static/css/reeeset.css'
import 'static/css/base.css'
import 'static/css/type.css'

class Template extends React.Component {
  render () {
    const { children } = this.props

    let nav = config.renderSiteNav
    ? <SiteNav {...this.props} /> : []

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
