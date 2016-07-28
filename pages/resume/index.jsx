import React from 'react'
import data from './_data.json'

import Title from '../../components/Title'
import Employment from '../../components/Resume/Employment'

class Resume extends React.Component {
  constructor (props) {
    super(props)
    this.udata = data
  }

  render () {
    // const jdata = this.props.route.page

    console.log(data.employment)

    return (
      <div className="container">
        <Title title="Resume" />
        <Employment utitle={data.employment.title} udata={data.employment.items} />
      </div>
    )
  }
}

export default Resume



//
// import './style.css'
//
// class Resume extends React.Component {
//
//   renderSkillsItem (item, key) {
//     const { title, sub } = item
//
//     return (
//       <div id={key} className="skill-group">
//         <h3><strong>{title}</strong></h3>
//         {sub}<br />
//         <br />
//       </div>
//     )
//   }
//
//   renderEmploymentItem (item, key) {
//     const { employer, title, location, period, blurb } = item
//
//     return (
//       <div id={key} className="job">
//         <div className="job-header">
//           <strong>{employer}</strong><br />
//           {title}<br />
//           {location}, {period}<br />
//         </div>
//         <div className="blurb" dangerouslySetInnerHTML={{ __html: blurb }} />
//       </div>
//     )
//   }
//
//   renderSection (section) {
//     let items = []``
//     console.log(section.title)
//
//     if (section.title === 'Employment') {
//       items = section.items.map(this.renderEmploymentItem, this)
//     }
//
//     if (section.title === 'Skills') {
//       items = section.items.map(this.renderSkillsItem, this)
//     }
//
//     return (
//       <div className="section">
//         {<h2>{section.title}</h2>}
//         {items}
//       </div>
//     )
//   }
//
//
