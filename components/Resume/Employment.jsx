import React from 'react'

import './Employment.css'

class Employment extends React.Component {

  renderEmploymentItem (item, key) {
    const { employer, title, location, period } = item
    console.log('map', employer)

    return (
      <div id={key} className="job">
        <div className="job-header">
          <strong>{employer}</strong> • {title}<br />
          {period}, {location}<br />
        </div>
      </div>
    )
  }

  render () {
    const { utitle, udata } = this.props
    console.log(udata)
    return (
      <div>
        <h2>{utitle}</h2>
        {udata.map(this.renderEmploymentItem, this)}
      </div>
    )
  }
}

Employment.propTypes = {
  utitle: React.PropTypes.object.isRequired,
  udata: React.PropTypes.array.isRequired,
}

export default Employment
