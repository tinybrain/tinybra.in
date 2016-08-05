import React from 'react'
import MDReactComponent from 'markdown-react-js'
import Lightbox from 'react-image-lightbox'
import _ from 'lodash'

import { DebugNav } from 'components/Debug'
import { SubNav } from 'components/SubNav'
import { Title } from 'components/Title'
import mdconfig from 'components/markdown'

import data from '../../lib/data.js'

import './work.css'

const loopy = (i, d, n) => ((i + d + n) % n)

const navvy = (curr, n) => {
  const prev = loopy(curr, -1, n)
  const next = loopy(curr, +1, n)
  return { curr, prev, next }
}

class WorkTemplate extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      lit: false,
      index: 0,
    }

    this.images = []
    this.imagemap = {}

    this.lightboxClose = this.lightboxClose.bind(this)
    this.lightboxNext = this.lightboxNext.bind(this)
    this.lightboxPrev = this.lightboxPrev.bind(this)

    this.onImageClick = this.onImageClick.bind(this)
    this.handleIterate = this.handleIterate.bind(this)
  }

  onImageClick (i, e) {
    e.preventDefault()
    console.log('clicky clicky', i)
    this.setState({ index: i, lit: true })

    console.log(this.lightboxSources())
  }

  indexDelta (d) {
    const [i, n] = [this.state.index, this.images.length]
    return ((i + d + n) % n)
  }

  lightboxSources () {
    const [prev, curr, next] = [-1, 0, 1]
      .map(d => this.images[this.indexDelta(d)].src)
    return { prev, curr, next }
  }

  lightboxClose () {
    this.setState({ lit: false, index: 0 })
  }

  lightboxNext () {
    this.setState({ index: this.indexDelta(+1) })
  }

  lightboxPrev () {
    this.setState({ index: this.indexDelta(+1) })
  }

  handleIterate (Tag, props, children, level) { // eslint-disable-line
    if (Tag === 'img') {
      let { src, alt } = props

      if (alt === 'lightbox') {
        let i = parseInt(src, 10)
        let img = this.images[src]
        return (
          <a className="popup" key={i} href={img.src} onClick={e => this.onImageClick(i, e)}>
            <img src={img.thumb} alt={img.alt} />
          </a>
        )
      }

      return (
        <img src={src} alt={alt} />
      )
    }
    return <Tag {...props}>{children}</Tag>
  }

  render () {
    const { children, location, route, routes} = this.props // eslint-disable-line
    const nav = data.navmap[location.pathname]

    const rroute = routes.find(r => r.path === data.slashless(location.pathname))

    console.assert(nav)

    // Lightbox index from frontmatter

    const lbd = rroute.page.data.lightbox

    this.images = lbd ? _.map(lbd, (alt, key) => {
      const src = `/images/${key}.jpg`
      const thumb = `/images/${key}-thumb.jpg`
      return { key, alt, src, thumb }
    }) : []

    // SubNav and (inefficient) markdown override

    let subnav = []
    let childs = children

    if (location.pathname !== route.path) {
      subnav = <SubNav nav={nav} />

      childs = (
        <MDReactComponent
          markdownOptions={mdconfig.options}
          plugins={mdconfig.plugins}
          text={rroute.page.data.body}
          onIterate={this.handleIterate}
        />
      )
    }

    // Render Lightbox

    let lightbox = []

    if (this.state.lit) {
      const lbsrc = this.lightboxSources()
      console.log(lbsrc)
      lightbox = (
        <Lightbox
          mainSrc={lbsrc.curr}
          nextSrc={lbsrc.next}
          prevSrc={lbsrc.prev}
          onCloseRequest={this.lightboxClose}
          onMovePrevRequest={this.lightboxPrev}
          onMoveNextRequest={this.lightboxNext}
        />
      )
    }

    // All together... and 5 - 6 - se -'vn - 8

    return (
      <div className="container">
        <DebugNav nav={nav} />
        <Title title="Work" path={route.path} />
        <br />
        {subnav}
        {childs}
        {lightbox}
      </div>
    )
  }
}

WorkTemplate.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
  routes: React.PropTypes.array,
}

export default WorkTemplate
