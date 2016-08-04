import React from 'react'
import MDReactComponent from 'markdown-react-js'
import Lightbox from 'react-image-lightbox'

import { DebugNav } from 'components/Debug'
import { SubNav } from 'components/SubNav'
import { Title } from 'components/Title'
import mdconfig from 'components/markdown'

import data from '../../lib/data.js'

import './work.css'

let images = []

class WorkTemplate extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      index: 0,
    }

    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.moveNext = this.moveNext.bind(this)
    this.movePrev = this.movePrev.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    this.handleIterate = this.handleIterate.bind(this)
  }

  openLightbox () {
    this.setState({ isOpen: true })
  }

  closeLightbox () {
    this.setState({ isOpen: false })
  }

  moveNext () {
    console.log(this)
    this.setState({ index: (this.state.index + 1) % images.length })
  }

  movePrev () {
    this.setState({ index: (this.state.index + images.length - 1) % images.length })
  }

  handleImageClick (i, e) {
    e.preventDefault()
    console.log('clicky clicky', i, e)
    console.log(this.state)
    console.log(images)
    this.openLightbox()
  }

  handleIterate (Tag, props, children, level) { // eslint-disable-line
    if (Tag === 'img') {
      const { src, alt } = props
      const image=`/images/${props.src}.jpg`
      const thumb=`/images/${props.src}-thumb.jpg`
      images.push(image)
      console.log(image, this)
      return (
        <a className="popup" key={src} href={image} onClick={e => this.handleImageClick(src, e)}>
          <img src={thumb} alt={alt} />
        </a>
      )
    }
    return <Tag {...props}>{children}</Tag>
  }

  render () {
    const { children, location, route, routes} = this.props // eslint-disable-line
    const nav = data.navmap[location.pathname]

    const rroute = routes.find(r => r.path === data.slashless(location.pathname))

    images = []

    console.assert(nav)

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

    let lightbox = []

    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={images[this.state.index]}
          nextSrc={images[(this.state.index + 1) % images.length]}
          prevSrc={images[(this.state.index + images.length - 1) % images.length]}
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
        />
      )
    }

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
