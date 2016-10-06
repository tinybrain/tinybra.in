import frontMatter from 'front-matter'
import markdown from 'markdown-it'
import objectAssign from 'object-assign'

const md = markdown({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
})
.use(require('markdown-it-sub'))
.use(require('markdown-it-footnote'))
.use(require('markdown-it-deflist'))
.use(require('markdown-it-abbr'))
.use(require('markdown-it-attrs'))
.use(require('markdown-it-icon'))

md.renderer.rules.emoji = (tokens, idx) => {
  const shortname = tokens[idx].markup
  if (shortname.startsWith('fa-')) {
    return `<i class="fa ${shortname}"></i>`
  }
  if (shortname.startsWith('ion-')) {
    return `<i class="ion ${shortname}"></i>`
  }
  return ''
}

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body)
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
