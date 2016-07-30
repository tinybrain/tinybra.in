import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const page = route.page.data

    return (
      <DocumentTitle title={`${config.siteTitle}`}>
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default MarkdownWrapper
