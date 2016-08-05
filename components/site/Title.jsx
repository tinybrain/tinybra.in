import React from 'react'
import { Link } from 'react-router'
import './Title.css'

const Title = (props) => {
  const { title, path } = props

  const inner = <h1>{title}</h1>
  const outer = path ? <Link to={path}>{inner}</Link> : inner

  return (
    <div className="title">
      {outer}
    </div>
  )
}

Title.propTypes = {
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string,
}

export default { Title }
