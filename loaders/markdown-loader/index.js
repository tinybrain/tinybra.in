import frontMatter from 'front-matter'
import objectAssign from 'object-assign'

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
