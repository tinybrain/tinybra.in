import React from 'react'

import Title from 'components/site/Title'
import Basic from 'components/cv/Basic'
import Employment from 'components/cv/Employment'
import SkillTable from 'components/cv/SkillTable'

import cv from 'data/cv'

import './style.css'

class Resume extends React.Component {

  render () {
    return (
      <div className="container">
        <Title title="Resume" />
        <div className="row">
          <div className="employment">
            <Employment employment={cv.employment} />
          </div>
          <div className="skills">
            <SkillTable skillsets={[cv.languages, cv.platforms, cv.design]} />
          </div>
        </div>
        <div className="row section">
          <Basic data={cv.patents} />
        </div>
        <div className="row section">
          <Basic data={cv.education} />
        </div>
      </div>
    )
  }
}

export default Resume
