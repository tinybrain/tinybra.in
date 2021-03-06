import React from 'react'
import SiteNav from 'components/site/SiteNav'
import { config } from 'config'

import 'static/css/reeeset.css'
import 'static/css/base.css'
import 'static/css/type.css'

import 'static/ion/css/ionicons.css'

class Template extends React.Component {
  render () {
    const { children } = this.props

    let nav = config.renderSiteNav
    ? <SiteNav {...this.props} /> : []

    // let footer = <Footer />
    let footer

    return (
      <div className="wrapper">
        {nav}
        <main>
          <div>
            {children}
          </div>
        </main>
        {footer}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object,
}

export default Template
