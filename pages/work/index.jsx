import React from 'react'
import sortBy from 'lodash/sortBy'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import WorkListItem from '../../components/WorkListItem'

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
    const workPages = route.pages.filter(p => p.data.category === 'work')
    const pages = sortBy(workPages, (p) => 'data.date')

    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="container">
          {/* <WorkList {...this.props}/> */}
          { pages.map((o, i) => {
            return (
              <section key={i}>
                <Nyaaa obj={ o.data }/>
              </section>
            )
          })}
        </div>
      </DocumentTitle>
    )
  }
}

export default Work
