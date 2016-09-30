import React from 'react'
import Social from './Social'

import './Footer.css'

class Footer extends React.Component {

  render () {
    const { location } = this.props

    return (
      <footer>
        <div className="container">
          <p>© 2416 tinybra.in</p>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  location: React.PropTypes.object,
}

export default Footer
