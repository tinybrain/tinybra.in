import React from 'react'
// import sortBy from 'lodash/sortBy'
// import {RouteHandler, Link} from 'react-router'
// import {prefixLink} from 'gatsby-helpers'
// import DocumentTitle from 'react-document-title'
// import access from 'safe-access'
// import {config} from 'config'

import './work.css'

class Work extends React.Component {

  render () {
    const pages = this.props.route.pages

    const wp = pages.filter(q => q.data.category === 'work')

    console.log(wp)

    pages.map(o => {
      // console.log(o)
      return null
    }, this)

    // console.log(this.props)

    return (
      <div className="things container">
        <h5 className="which-things">AAAA</h5>
      </div>
    )
  }
}

Work.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Work
