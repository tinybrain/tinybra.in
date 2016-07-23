import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

class MarkdownWrapper extends React.Component {

  render() {
    const { route } = this.props
    const page = route.page.data

    let content

    console.log(page)




    return (
      <DocumentTitle title={ `${page.title} - ${config.siteTitle}` }>
        <div className='container'>
          <h4>{page.title}</h4>
          <hr/>
          <div dangerouslySetInnerHTML={ {    __html: page.body} } />
        </div>
      </DocumentTitle>
    )
  }
}

export default MarkdownWrapper
