import container from 'markdown-it-container'
import blockimage from 'markdown-it-block-image'
// import blockembed from 'markdown-it-block-embed'
// import classy from 'markdown-it-classy'
// import footnote from 'markdown-it-footnote'

const plugins = [
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
}

export default mdconfig
