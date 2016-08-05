import React from 'react'
import DocumentTitle from 'react-document-title'
import MDReactComponent from 'markdown-react-js'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const page = route.page.data

    return (
      <DocumentTitle title={`${config.siteTitle}`}>
        <MDReactComponent text={page.body} />
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default MarkdownWrapper
