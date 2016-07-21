import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import SiteNav from '../components/SiteNav'

import '../css/normalize.css'
import '../css/skeleton.css'
import '../css/skeletonx.css'
import '../css/style.css'

class Template extends React.Component {
    render() {
        const {location, children} = this.props

        return (
            <div className='wrapper'>
              <SiteNav {...this.props}/>
              <div className='header'></div>
              { children }
            </div>
            );
    }
}

Template.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
}

export default Template
