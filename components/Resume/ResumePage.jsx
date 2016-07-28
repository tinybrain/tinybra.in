import React from 'react'
import Title from './Title'

import './Resume.css'

class Resume extends React.Component {

  renderSkillsItem (item, key) {
    const { title, sub } = item

    return (
      <div id={key} className="skill-group">
        <h3><strong>{title}</strong></h3>
        {sub}<br />
        <br />
      </div>
    )
  }

  renderEmploymentItem (item, key) {
    const { employer, title, location, period, blurb } = item

    return (
      <div id={key} className="job">
        <div className="job-header">
          <strong>{employer}</strong><br />
          {title}<br />
          {location}, {period}<br />
        </div>
        <div className="blurb" dangerouslySetInnerHTML={{ __html: blurb }} />
      </div>
    )
  }

  renderSection (section) {
    let items = []
    console.log(section.title)

    if (section.title === 'Employment') {
      items = section.items.map(this.renderEmploymentItem, this)
    }

    if (section.title === 'Skills') {
      items = section.items.map(this.renderSkillsItem, this)
    }

    return (
      <div className="section">
        {<h2>{section.title}</h2>}
        {items}
      </div>
    )
  }

  render () {
    const { route } = this.props
    const page = route.page.data
    console.log(page.title)

    return (
      <div className="container">
        <Title title={page.title} />
        <div className="left">
          {this.renderSection(page.employment)}
        </div>
        <div className="right">
          {this.renderSection(page.skills)}
        </div>
      </div>
    )
  }
}

Resume.propTypes = {
  route: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default Resume
