import React from 'react'
import { Link } from 'react-router'
import data from 'data/navigation'

import './work.css'

const renderWorkTile = (item) => {
  const { path, title } = item
  const slpath = data.slashless(path)
  const tile = `/images${slpath}-tile.svg`
  return (
    <div key={path} className="work-waffle">
      <Link to={path}>
        <img src={tile} alt={title} />
      </Link>
    </div>
  )
}

class Work extends React.Component {
  render () {
    return (
      <div>
        <div className=".work">
          {data.navmap['/work/'].children.map(renderWorkTile, this)}
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
