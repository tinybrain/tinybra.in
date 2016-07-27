import React from 'react'
import SiteNav from '../components/SiteNav'

import '../static/css/reeeset.css'
import '../static/css/base.css'
import '../static/css/type.css'

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className="wrapper">
        <SiteNav {...this.props} />
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
