import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import './style.css';


class Thing extends React.Component {
  render() {
    const { title, items } = this.props.t
    return(
      <div className="things container">
        <h5 className="which-things">{ title }</h5>
        <hr/>
        { items.map(function(t, i) { return (
          <div key={ i } className="thing row">
            <div className="period two columns">{ t.period }</div>
            <div className="details ten columns">
              <div className="title">{ t.title }</div>
              <div className="sub">{ t.sub }</div>
                { typeof t.highlights != 'undefined' &&
                  <ul className="waffle">
                    { t.highlights.map(function(h, i) {
                      return <li key={ i }>{ h }</li>
                    })}
                  </ul>
                }
            </div>
          </div>
        )})}
      </div>
    )
  }
}

class ResumePage extends React.Component {
  render() {
    const {route} = this.props
    const page = route.page.data

    return (
      <div>
        <Thing t={ page.employment } />
        <Thing t={ page.patents } />
        <Thing t={ page.education } />
      </div>
    )
  }
}

ResumePage.propTypes = {
  //page: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
}

export default ResumePage
