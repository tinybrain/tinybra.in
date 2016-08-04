import React from 'react'
import { Link } from 'react-router'

const PopupImage = (props) => {
  const { src, alt } = props
  return (
    <Link className="popup" to={`/images/${src}-jpg`}>
      <img src={`/images/${src}-thumb.jpg`} alt={alt} />
    </Link>
  )
}

PopupImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
}

export { PopupImage }
