import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { intro } from './_data.yaml'

// import './work.css'

console.log(intro)

class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle}`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: intro }} />
        </div>
      </DocumentTitle>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Index
