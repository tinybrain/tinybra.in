import React from 'react'
import { Link } from 'react-router'
import MDReactComponent from 'markdown-react-js'
import { DebugNav } from 'components/Debug'
import { SubNav } from 'components/SubNav'
import { Title } from 'components/Title'

// import handleIterate from 'components/markdown/StyledMarkdown'

import data from '../../lib/data.js'

import './work.css'

const PopupImage = (props) => {
  const { src, alt } = props
  return (
    <Link className="popup" to={`/images/${src}-jpg`}>
      <img src={`/images/${src}-thumb.jpg`} alt={alt} />
    </Link>
  )
}

PopupImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
}

const handleIterate = (Tag, props, children, level) => { // eslint-disable-line

  if (Tag === 'img') {
    return <PopupImage {...props} />
  }

  return <Tag {...props}>{children}</Tag>
}


class WorkTemplate extends React.Component { // eslint-disable-line
  render () {
    const { children, location, route, routes} = this.props // eslint-disable-line
    const nav = data.navmap[location.pathname]

    const rroute = routes.find(r => r.path === data.slashless(location.pathname))

    console.assert(nav)

    let subnav = []
    let childs = children

    if (location.pathname !== route.path) {
      subnav = <SubNav nav={nav} />
      childs = <MDReactComponent text={rroute.page.data.body} onIterate={handleIterate} />
    }

    return (
      <div className="container">
        <DebugNav nav={nav} />
        <Title title="Work" path={route.path} />
        <br />
        {subnav}
        {childs}
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
