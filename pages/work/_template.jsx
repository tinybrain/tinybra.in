import React from 'react'
import Title from '../../components/Title'
import { Link } from 'react-router'

import navdata from './_navdata.yaml'

import './work.css'

class WorkTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.nav = { '/work': null }
    navdata.forEach((e, i, a) => {
      const l = a.length
      this.nav[e.path] = {
        current: a[i],
        prev: a[(i - 1 + l) % l],
        next: a[(i + 1) % l]
      }
    })

    this.icons = {
      prev: 'fa fa-angle-left fa-2x',
      next: 'fa fa-angle-right fa-2x'
    }
  }

  renderNavLinks (path, navmap) {
    const n = navmap[path]
    return (n && (['prev', 'next'].map(t => (
      <Link key={t} className={`work-nav-${t}`} to={n[t].path}>
        <i className={this.icons[t]} />
      </Link>
    ))))
  }

  render () {
    const { children, location, route } = this.props

    /* for the sake of the children ... don't look at this bit */

    const child = route.childRoutes.find(e =>
      e.path === location.pathname
    )

    const title = child && child.page.data.title

    return (
      <div className="container">
        <Title title="Work" />
        <br />
        <div className="work-nav">
          <h2>{title}</h2>
          {this.renderNavLinks(location.pathname, this.nav)}
        </div>
        {children}
      </div>
    )
  }
}

WorkTemplate.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default WorkTemplate
