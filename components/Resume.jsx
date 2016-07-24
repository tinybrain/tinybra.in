import React from 'react'
import './Resume.css'

class Resume extends React.Component {

  renderItem (item, key) {
    return (
      <div id={key} className="employment-item row">
        <div className="period two columns">{item.period}</div>
        <div className="details ten columns">
          <div className="title">{item.title}</div>
          <div className="sub">{item.sub}</div>
          {typeof item.highlights !== 'undefined' &&
            <ul className="waffle">
              {item.highlights.map((h, k) => <li key={k}>{h}</li>)}
            </ul>
          }
        </div>
      </div>
    )
  }

  renderSection (section, key) {
    return (
      <div key={key} className="resume-section">
        <h5>{section.title}</h5>
        <hr />
        {section.items.map(this.renderItem, this)}
      </div>
    )
  }

  render () {
    const { route } = this.props
    const page = route.page.data

    return (
      <div className="container">
        <h2>Resumé</h2>
        {this.renderSection(page.employment)}
        {this.renderSection(page.patents)}
        {this.renderSection(page.education)}
      </div>
    )
  }
}

Resume.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Resume
