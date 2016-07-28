import React from 'react'
import { config } from 'config'

import './DebugLabel.css'

class DebugLabel extends React.Component {
  render () {
    console.log(this.props)
    const { children, enabled, label } = this.props

    if (config.renderDebug) {
      return (
        <div>
          <code className="fuck">
            {label}
          </code>
          {children}
        </div>
      )
    }

    return null
  }
}

export default DebugLabel
