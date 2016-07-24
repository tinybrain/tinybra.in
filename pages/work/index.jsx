import React from 'react'
// import sortBy from 'lodash/sortBy'
// import {RouteHandler, Link} from 'react-router'
// import {prefixLink} from 'gatsby-helpers'
// import DocumentTitle from 'react-document-title'
// import access from 'safe-access'
// import {config} from 'config'

import './work.css'

class Work extends React.Component {

  renderImage (image, key) {
    return (
      <div key={key} className="image">
        <a href={`/images/${image}.jpg`}>
          <img src={`/images/${image}-thumb.jpg`} alt={image} />
        </a>
      </div>
    )
  }

  renderProject (project, index) {
    const { title, body, images } = project.data

    return (
      <div key={index} className="work-item row">
        <hr />
        <div className="title">{title}</div>
        <div className="blurb" dangerouslySetInnerHTML={{ __html: body }} />

        {typeof images !== 'undefined' &&
          <div className="images-row">
            {images.map(this.renderImage, this)}
          </div>
        }
      </div>
    )
  }

  render () {
    const pages = this.props.route.pages

    const workPages = pages.filter(q => q.data.category === 'work')

    return (
      <div className="work-list container">
        <h5 className="which-things">Work</h5>
        {workPages.map(this.renderProject, this)}
      </div>
    )
  }
}

Work.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Work
