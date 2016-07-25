const fm = require('front-matter')
const markdownIt = require('markdown-it')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const extend = require('util')._extend

const md = markdownIt({
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

const rbase = 'prebuild/resume'
const edir = path.join(rbase, 'employment/')
const extra = path.join(rbase, 'data.yaml')
const out = 'pages/resume/index.json'

const files = fs.readdirSync(edir).map(fn => path.join(edir, fn))

const eitems = files.map(fn => {
  const data = fs.readFileSync(fn, 'utf8')
  const meta = fm(data)
  const body = md.render(meta.body)
  return extend(meta.attributes, { blurb: body })
})

console.log(eitems)

const data = yaml.safeLoad(fs.readFileSync(extra, 'utf8'))

data.employment = {
  title: 'Employment',
  items: eitems,
}

fs.writeFileSync(out, JSON.stringify(data, null, 2))
// console.log(JSON.stringify(out, null, 2))
