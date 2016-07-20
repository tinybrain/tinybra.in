import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import SiteNav from '../components/SiteNav'
//import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    const {location, children} = this.props

    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <p>WasAAAAA!</p>
        </div>
      </DocumentTitle>
    )
  }
}
