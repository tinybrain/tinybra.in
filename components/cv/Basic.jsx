import React from 'react'

import './Basic.css'

const BasicItem = (props) => {
  const { title, sub } = props.item
  return (
    <div key={title} className="item">
      <strong>{title}</strong><br />
      {sub}<br />
    </div>
  )
}

BasicItem.propTypes = {
  item: React.PropTypes.object.isRequired,
}

const Basic = (props) => {
  const { title, items } = props.data
  return (
    <div className="block">
      <h2>{title}</h2>
      {items.map((item, key) => (
        <BasicItem key={key} item={item} />
      ))}
    </div>
  )
}

Basic.propTypes = {
  data: React.PropTypes.object.isRequired,
}

export default Basic
