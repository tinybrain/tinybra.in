import React from 'react'

import './Employment.css'

class Employment extends React.Component {

  renderEmploymentItem (item, key) {
    const { employer, title, location, period } = item
    return (
      <div key={key} className="item">
        <strong>{employer}</strong> • {title}<br />
        {period}, {location}
      </div>
    )
  }

  render () {
    console.log(this.props.employment)
    const { title, items } = this.props.employment
    return (
      <div className="block">
        <h2>{title}</h2>
        {items.map(this.renderEmploymentItem, this)}
      </div>
    )
  }
}

Employment.propTypes = {
  employment: React.PropTypes.object.isRequired,
}

export default Employment
