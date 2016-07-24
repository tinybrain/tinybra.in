import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Resume from '../components/Resume'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const data = this.props.route.page.data

    return (
      <DocumentTitle title={`${config.siteTitle} | ${data.title}`}>
        <Resume {...this.props} />
      </DocumentTitle>
    )
  },
})
