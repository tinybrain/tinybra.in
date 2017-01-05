import React from 'react'

import './SkillTable.css'

const Skill = (props) => {
  const { item } = props
  const [skill, years, score] = item.split(', ')
  return (
    <div className="skill">
      <div className="name">{skill}</div>
      <div className="years">{`${years}y`}</div>
      <div className="score">
        <div className="score-value" style={{ width: `${score}%` }}>
        </div>
      </div>
    </div>
  )
}

Skill.propTypes = {
  item: React.PropTypes.string.isRequired,
}

const SkillSet = (props) => {
  const { skillset } = props
  return (
    <div className="skillset">
      <h3>{skillset.title}</h3>
      {skillset.items.map((item, key) => (
        <Skill key={key} item={item} />
      ))}
    </div>
  )
}

SkillSet.propTypes = {
  skillset: React.PropTypes.object.isRequired,
}

const SkillTable = (props) => {
  const { skillsets } = props
  return (
    <div className="block">
      <h2>Skills</h2>
      {skillsets.map((skillset) => (
        <SkillSet key={skillset.title} skillset={skillset} />
      ))}
    </div>
  )
}

SkillTable.propTypes = {
  skillsets: React.PropTypes.array.isRequired,
}

export default SkillTable
