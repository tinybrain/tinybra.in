import React from 'react'
import _ from 'lodash'

import { config } from 'config'

import Title from 'components/site/Title'
import PortfolioItem from 'components/portfolio/PortfolioItem'

import './portfolio.css'

const Portfolio = (props) => {
  const { title, sub, items } = config.portfolio
  const pageMap = _.keyBy(props.route.pages, (page) => page.path)
  const pages = items.map((item) => ({ id: item, page: pageMap[`/portfolio/${item}/`] }))

  return (
    <div className="container">
      <Title title={title} />
      <p>{sub}</p>
      <section className="portfolio">
        {pages.map((item) => <PortfolioItem {...props} key={item.id} item={item} />)}
      </section>
    </div>
  )
}

Portfolio.propTypes = {
  route: React.PropTypes.object,
}

export default Portfolio
