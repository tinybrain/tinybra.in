import React from 'react'
// import { Link } from 'react-router'

const PopupImage = (props) => {
  const { src, alt, popupHandler } = props
  console.log(popupHandler)
  return (
    <a className="popup" href={`/images/${src}-jpg`} onClick={e => popupHandler(src, e)}>
      <img src={`/images/${src}-thumb.jpg`} alt={alt} />
    </a>
  )
}

PopupImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
}

export { PopupImage }
