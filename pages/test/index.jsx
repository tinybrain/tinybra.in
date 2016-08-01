import React from 'react'
import Title from '../../components/Title'

import data from '../../lib/data.js'
// import './work.css'

class Test extends React.Component {
  render () {
    console.log(data.navdata, data.navmap)
    return (
      <div className="container">
        <Title title="Test" />
        <div>Test!</div>
        <div>
        </div>
      </div>
    )
  }
}

export default Test
