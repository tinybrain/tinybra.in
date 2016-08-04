import React from 'react'
import { PopupImage } from 'components/images/popup-image'

import container from 'markdown-it-container'
import attrs from 'markdown-it-attrs'
import blockimage from 'markdown-it-block-image'
// import blockembed from 'markdown-it-block-embed'
// import classy from 'markdown-it-classy'
// import footnote from 'markdown-it-footnote'

const handleIterate = (Tag, props, children, level) => { // eslint-disable-line
  if (Tag === 'img') {
    return <PopupImage {...props} />
  }

  return <Tag {...props}>{children}</Tag>
}

const plugins = [
  attrs,
  {
    plugin: container,
    args: ['screenies'],
  },
  blockimage,
]

const options = {
  html: false,
  linkify: true,
  typographer: true,
}

const mdconfig = {
  options,
  plugins,
  handleIterate,
}

export default mdconfig
