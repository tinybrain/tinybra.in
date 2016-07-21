import React from 'react'
import sortBy from 'lodash/sortBy'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
//import WorkListItem from '../../components/WorkListItem'

class Nyaaa extends React.Component {
  render() {

    let { title, body } = this.props.obj

    return (
      <div className="work-list-item">
        <hr></hr>
        <h3>{ title }</h3>
        <p dangerouslySetInnerHTML={ {__html: body } } />
      </div>
    )
  }
}

class Work extends React.Component {

  render () {

    const {route} = this.props

    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="container">
          Lies, all of it.
        </div>
      </DocumentTitle>
    )
  }
}

export default Work
