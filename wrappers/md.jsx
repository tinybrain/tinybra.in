import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

class MarkdownWrapper extends React.Component {

  render () {
    const { route } = this.props
    const page = route.page.data

    return (
      <DocumentTitle title={`${page.title} | ${config.siteTitle}`}>
        <div className="container">
          <div className="title">
            <h1>{page.title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: page.body }} />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default MarkdownWrapper
