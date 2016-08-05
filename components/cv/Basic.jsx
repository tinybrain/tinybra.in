import React from 'react'

import './Basic.css'

class Basic extends React.Component {

  renderBasicItem (item) {
    const { title, sub } = item
    return (
      <div key={title} className="item">
        <strong>{title}</strong><br />
        {sub}<br />
      </div>
    )
  }

  render () {
    console.log(this.props)
    const { title, items } = this.props.data
    return (
      <div className="block">
        <h2>{title}</h2>
        {items.map(this.renderBasicItem, this)}
      </div>
    )
  }
}

Basic.propTypes = {
  data: React.PropTypes.object.isRequired,
}

export default Basic
