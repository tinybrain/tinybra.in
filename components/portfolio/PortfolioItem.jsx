import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import _ from 'lodash'

import './PortfolioItem.css'

const PortfolioItem = (props) => {
  const { item } = props
  const { title, sub, image, body } = item.page.data

  let screenie

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

export default PortfolioItem
