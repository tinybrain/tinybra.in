import React from 'react'
import { Link } from 'react-router'
import Title from '../../components/Title'

// import sortBy from 'lodash/sortBy'
// import {RouteHandler, Link} from 'react-router'
// import {prefixLink} from 'gatsby-helpers'
// import DocumentTitle from 'react-document-title'
// import access from 'safe-access'
// import {config} from 'config'

import './work.css'

import navdata from './_navdata.yaml'

class Work extends React.Component {

  renderWorkTile (item) {
    const { path, title } = item
    return (
      <div key={path} className="work-waffle">
        <Link to={path}>
          <img src={`/images${path}-tile.svg`} alt={title} />
          {/* <p>{title}</p> */}
        </Link>
      </div>
    )
  }

  render () {
    const { route } = this.props
    const page = route.page.data

    return (
      <div>
        <div className=".work">
          {navdata.map(this.renderWorkTile, this)}
        </div>
      </div>
    )
  }
}

Work.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Work
