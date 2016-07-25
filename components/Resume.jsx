import React from 'react'
import './Resume.css'

class Resume extends React.Component {

  renderItem (item, key) {
    return (
      <div id={key} className="employment-item row">
        <div className="period two columns">{item.period}</div>
        <div className="details ten columns">
          <div className="bugsy">
            {item.title}<br />{item.sub}
          </div>
          <div dangerouslySetInnerHTML={{ __html: item.blurb }} />
        </div>
      </div>
    )
  }

  renderSection (section) {
    return (
      <div className="resume-section">
        <h5><span>{section.title}</span></h5>
        {section.items.map(this.renderItem, this)}
      </div>
    )
  }

  render () {
    const { route } = this.props
    const page = route.page.data

    return (
      <div className="container">
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
