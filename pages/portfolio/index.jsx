import React from 'react'
// import { Link } from 'react-router'
import ImageZoom from 'react-medium-image-zoom'
import _ from 'lodash'

import './portfolio.css'

const PortfolioItem = (props) => {
  const { title, sub, image, body } = props.item.data

  let screenie = null

  const width = _.get(image, 'width', null);

  if (typeof image !== 'undefined') {
    const prefix = '/portfolio/images/'

    screenie = (
      <ImageZoom
        image={{
          src: prefix + image.src,
          alt: image.alt,
        }}
        zoomImage={{
          src: prefix + image.zoom,
          alt: image.alt,
          style: width ? { width: width } : null,
        }}
      />
    )
  }

  return (
    <section className="portfolio-item">
      <div className="heading">
        <h2>{title}</h2>
        <h3>{sub}</h3>
      </div>
      <div className="info" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="media">
        {screenie}
      </div>
    </section>
  )
}

PortfolioItem.propTypes = {
  item: React.PropTypes.object,
}

const Portfolio = (props) => {
  const portfolioItems = [
    'spaduino',
    'evolution',
    'voice',
    'axon',
    'lake',
    'vault',
    'boom',
  ]

  const pageMap = _.keyBy(props.route.pages, (page) => page.path)
  const pages = portfolioItems.map((item) => pageMap[`/portfolio/${item}/`])

  return (
    <div className="container">
      <h1>Portfolio</h1>
      <p>My portfolio</p>
      <section className="portfolio">
        {pages.map((item) => (
          <PortfolioItem {...props} key={item.path} item={item} />
        ))}
      </section>
    </div>
  )
}

Portfolio.propTypes = {
  route: React.PropTypes.object,
}

export default Portfolio
