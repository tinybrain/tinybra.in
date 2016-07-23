import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'

import './work.css'

import wd from './work-data.yaml'

class Work extends React.Component {

  render() {
    const {route} = this.props
    const data = route.page.data

    return(
      <div className="things container">
        <h5 className="which-things">{ wd.title }</h5>
        { wd.projects.map(this.renderProject, this) }
      </div>
    )
  }

  renderProject(project, i) {

    console.log(this)

    let ia = []

    if (typeof project.images != 'undefined') {
      ia = project.images.map(this.renderImage, this)
    }

    return (
      <div key={i} className="thing row">
        <hr/>
        <div className="things-name">{ project.title }</div>
        <div className="sub">{ project.sub }</div>
        <div className="waffle">{ project.blurb }</div>
        {ia}
      </div>
    )
  }

  renderImage(image, j) {
    console.log(image)
    return <p>-{image}-</p>
  }
}

Work.propTypes = {
  //page: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
}

export default Work
