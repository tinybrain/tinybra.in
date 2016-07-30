import React from 'react'

import './SkillTable.css'

class SkillTable extends React.Component {
  renderSkill (item, key) {
    const [skill, years, score] = item.split(', ')
    return (
      <div key={key} className="skill">
        <div className="skill-name">{skill}</div>
        <div className="skill-years">{`${years}y`}</div>
        <div className="skill-score">
          <div className="score-value" style={{ width: `${score}%` }}>
          </div>
        </div>
      </div>
    )
  }

  renderSkillset (skillset) {
    return (
      <div key={skillset.title} className="skillset">
        <h3>{skillset.title}</h3>
        {skillset.items.map(this.renderSkill, this)}
      </div>
    )
  }

  render () {
    console.log(this.props)
    const skillsets = this.props.skillsets

    return (
      <div className="block">
        <h2>Skills</h2>
        {skillsets.map(this.renderSkillset, this)}
      </div>
    )
  }
}

SkillTable.propTypes = {
  skillsets: React.PropTypes.array.isRequired,
}

export default SkillTable
