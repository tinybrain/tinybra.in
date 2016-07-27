import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { intro } from './_data.yaml'

// import './work.css'

console.log(intro)

class Home extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle}`}>
        <div className="container">
          <h1>Simon Lang</h1>
        </div>
      </DocumentTitle>
    )
  }
}

Home.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Home
