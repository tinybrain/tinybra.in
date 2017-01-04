import React from 'react'

import './Employment.css'

const EmploymentItem = (props) => {
  const { employer, title, location, period } = props.item
  return (
    <div className="item">
      <strong>{employer}</strong> • {title}<br />
      {period}, {location}
    </div>
  )
}

EmploymentItem.propTypes = {
  item: React.PropTypes.object.isRequired,
}

const Employment = (props) => {
  const { title, items } = props.employment
  return (
    <div className="block">
      <h2>{title}</h2>
      {items.map((item, key) => (
        <EmploymentItem key={key} item={item} />
      ))}
    </div>
  )
}

Employment.propTypes = {
  employment: React.PropTypes.object.isRequired,
}

export default Employment
