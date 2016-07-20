import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import WorkList from '../../components/WorkList'

export default class Index extends React.Component {

  render () {

    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <p>WasAAAAA!</p>
          <WorkList {...this.props}/>
        </div>
      </DocumentTitle>
    )
  }
}
