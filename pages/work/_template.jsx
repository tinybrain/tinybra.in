import React from 'react'
import MDReactComponent from 'markdown-react-js'
import Lightbox from 'react-image-lightbox'
import access from 'safe-access'
import _ from 'lodash'

import Title from 'components/site/Title'
import SubNav from 'components/site/SubNav'
import DebugNav from 'components/site/DebugNav'
import mdconfig from 'components/markdown'
import data from 'data/navigation'
import config from 'config'

import './work.css'

class WorkTemplate extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      lit: false,
      index: 0,
    }

    this.images = []

    // Lightbox event props

    this.lightboxHandlers = {
      onCloseRequest: this.lightboxClose.bind(this),
      onMovePrevRequest: this.lightboxPrev.bind(this),
      onMoveNextRequest: this.lightboxNext.bind(this),
    }

    this.onImageClick = this.onImageClick.bind(this)
    this.markdownHandler = this.markdownHandler.bind(this)
  }

  // Show Lightbox

  onImageClick (i, e) {
    e.preventDefault()
    this.setState({ index: i, lit: true })
  }

  // Lightbox indexing

  delta (d) {
    const [i, n] = [this.state.index, this.images.length]
    return ((i + d + n) % n)
  }

  lightboxSources () {
    if (this.images.length <= 1) {
      const mainSrc = this.images[0].src
      return { mainSrc }
    }

    const [prevSrc, mainSrc, nextSrc] = [-1, 0, +1]
      .map(d => this.images[this.delta(d)].src)

    return { prevSrc, mainSrc, nextSrc }
  }

  // Lightbox handlers

  lightboxClose () {
    this.setState({ lit: false, index: 0 })
  }

  lightboxNext () {
    this.setState({ index: this.delta(+1) })
  }

  lightboxPrev () {
    this.setState({ index: this.delta(-1) })
  }

  // Lightbox images are generated specified in an array in the frontmatter
  // which are referenced in markdown as '![lightbox](n)', and rendered here
  // as react components.

  markdownHandler (Tag, props, children, level) { // eslint-disable-line
    if (Tag === 'img') {
      let { src, alt } = props

      if (alt === 'lightbox') {
        let i = parseInt(src, 10)
        let img = this.images[src]
        console.assert(img)
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
    const { children, location, route, routes } = this.props

    // SubNav data is defined externally

    const nav = data.navmap[location.pathname]
    console.assert(nav)

    const debugnav = config.debugNav ? <DebugNav nav={nav} /> : []

    // Template doesn't know about subpages so have to go looking

    const rroute = routes.find(r => r.path === data.slashless(location.pathname))

    // Build elements for non-index pages, i.e. /work/*.md

    this.images = []
    let subnav = []
    let kiddies = children

    if (rroute) {
      // Index Lightbox image paths from frontmatter

      const lbdata = access(rroute, 'page.data.lightbox')
      if (lbdata) {
        this.images = _.map(lbdata, (alt, key) => {
          const src = `/images/${key}.jpg`
          const thumb = `/images/${key}-thumb.jpg`
          return { key, alt, src, thumb }
        })
      }

      // SubNav and (hacky) markdown override ...
      // md wrapper should be aware of this so as to not parse twice

      const mdbody = access(rroute, 'page.data.body')
      if (location.pathname !== route.path && mdbody) {
        subnav = <SubNav nav={nav} />
        kiddies = (
          <MDReactComponent
            markdownOptions={mdconfig.options}
            plugins={mdconfig.plugins}
            text={mdbody}
            onIterate={this.markdownHandler}
          />
        )
      }
    }

    // Render Lightbox

    let lightbox = []

    if (this.state.lit) {
      lightbox = (
        <Lightbox
          {...this.lightboxSources()}
          {...this.lightboxHandlers}
        />
      )
    }

    // All together... AND 5 - 6 - se -'vn - 8

    return (
      <div className="container">
        {debugnav}
        <Title title="Work" path={route.path} />
        <br />
        {subnav}
        {kiddies}
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
