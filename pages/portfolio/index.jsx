import React from 'react'
// import { Link } from 'react-router'
import ImageZoom from 'react-medium-image-zoom'
import _ from 'lodash'

import './portfolio.css'

const PortfolioItem = (props) => {
  const { item } = props
  const { title, sub, image, body } = item.page.data

  let screenie = null

  const width = _.get(image, 'width', null)

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
          style: width ? { width } : null,
        }}
      />
    )
  }

  return (
    <section id={item.id} className="portfolio-item">
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
  const pages = portfolioItems.map((item) => ({ id: item, page: pageMap[`/portfolio/${item}/`] }))

  return (
    <div className="container">
      <h1>Portfolio</h1>
      <p>Here are some projects that rate slightly better than half decent.</p>
      <p>Most of them are from my time as an engineer at Dolby Laboratories and
        are not open source. I take non-disclosure very seriously, and wouldn't
        disclose source code even if I had it, which is a pity as a lot of it
        was pretty badass.
      </p>
      <section className="portfolio">
        {pages.map((item) => (
          <PortfolioItem {...props} key={item.id} item={item} />
        ))}
      </section>
    </div>
  )
}

Portfolio.propTypes = {
  route: React.PropTypes.object,
}

export default Portfolio
