import React from 'react'
import Title from '../../components/Title'
import { IoIonic, IoChevronLeft, IoChevronRight } from 'react-icons/lib/io'

// import sortBy from 'lodash/sortBy'
// import {RouteHandler, Link} from 'react-router'
// import {prefixLink} from 'gatsby-helpers'
// import DocumentTitle from 'react-document-title'
// import access from 'safe-access'
// import {config} from 'config'

// import './work.css'

class Test extends React.Component {
  render () {
    return (
      <div className="container">
        <Title title="Test" />
        <div>Test!</div>
        <div>
          <IoIonic size="4em" />
          <IoChevronLeft />
          <IoChevronRight />
        </div>
      </div>
    )
  }
}

export default Test
