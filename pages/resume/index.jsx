import React from 'react'
import { employment } from './_data.json'
import { languages, platforms, design } from './_skills.yaml'
import { patents, education } from './_extra.yaml'

import Title from '../../components/Title'
import Basic from '../../components/Resume/Basic'
import Employment from '../../components/Resume/Employment'
import SkillTable from '../../components/Resume/SkillTable'

import "./style.css"

class Resume extends React.Component {

  render () {
    return (
      <div className="container">
        <Title title="Resume" />
        <div className="row">
          <div className="left">
            <Employment employment={employment} />
          </div>
          <div className="right">
            <SkillTable skillsets={[languages, platforms, design]} />
          </div>
        </div>
        <div className="row section">
          <Basic data={patents} />
        </div>
        <div className="row section">
          <Basic data={education} />
        </div>
      </div>
    )
  }
}

export default Resume
