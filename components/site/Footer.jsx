import React from 'react'
import Social from './Social'

import './Footer.css'

class Footer extends React.Component {

  render () {
    const { location } = this.props

    return (
      <footer>
        <div className="container">
          <p>© 2416 tinybra.in, made with <a href="https://github.com/gatsbyjs/gatsby" alt="Gatsby.js">Gatsby.js</a></p>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  location: React.PropTypes.object,
}

export default Footer
