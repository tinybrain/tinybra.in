import React from 'react'
import Title from '../../components/Title'

// import sortBy from 'lodash/sortBy'
// import {RouteHandler, Link} from 'react-router'
// import {prefixLink} from 'gatsby-helpers'
// import DocumentTitle from 'react-document-title'
// import access from 'safe-access'
// import {config} from 'config'

// import './work.css'

class Work extends React.Component {
  render () {
    const { route } = this.props
    const page = route.page.data
    
    console.log('Work says...', this.props)

    return (
      <div className="container">
        <div>Work!</div>
      </div>
    )
  }
}

Work.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Work
