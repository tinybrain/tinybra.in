import React from 'react'

class TestTemplate extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className="wrapper test">
        {children}
      </div>
    )
  }
}

TestTemplate.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object,
}

export default TestTemplate
