import React from 'react'
import SiteNav from 'components/site/SiteNav'
import Footer from 'components/site/Footer'
import { config } from 'config'

import 'static/css/reeeset.css'
import 'static/css/base.css'
import 'static/css/type.css'

class Template extends React.Component {
  render () {
    const { children } = this.props

    let nav = config.renderSiteNav
    ? <SiteNav {...this.props} /> : []

    let footer = <Footer />

    return (
      <div className="wrapper">
        {nav}
        <main>
          {children}
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
