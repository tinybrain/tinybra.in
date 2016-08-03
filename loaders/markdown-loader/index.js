import frontMatter from 'front-matter'
import objectAssign from 'object-assign'

import markdownIt from 'markdown-it'

import hljs from 'highlight.js'

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight,
})
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-block-image'), {
    outputContainer: true,
    containerClassName: 'block-image-container',
  })
  .use(require('markdown-it-block-embed'), {
    containerClassName: 'block-video-container',
  })

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  // const body = md.render(meta.body)
  const body = meta.body
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
