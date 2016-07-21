import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import './style.css';

class SitePage extends React.Component {
  render() {
    const {route} = this.props
    const page = route.page.data

    return (
      return null
    )
  }
}

SitePage.propTypes = {
  page: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
}

export default SitePage
