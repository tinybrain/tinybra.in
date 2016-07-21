import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props
    const page = route.page.data
    let template, category

    category = page.category

    return (
        <DocumentTitle title={ `${page.title} - ${config.siteTitle}` }>
          <div className='container'>
            <div dangerouslySetInnerHTML={ {    __html: page.body} } />
          </div>
        </DocumentTitle>
        );
  }
}

export default MarkdownWrapper
