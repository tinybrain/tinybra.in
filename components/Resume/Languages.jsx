import React from 'react'

import './Languages.css'

class Languages extends React.Component {
  renderLanguageItem (item, key) {
    const [language, years, score] = item.split(', ')
    return (
      <tr key={key}>
        <td>{language}</td>
        <td>{years}</td>
        <td>{score}</td>
      </tr>
    )
  }

  render () {
    console.log(this.props)
    const { title, items } = this.props.languages
    return (
      <div>
        <h3>{title}</h3>
        <table>
          <tbody>
            {items.map(this.renderLanguageItem, this)}
          </tbody>
        </table>
      </div>
    )
  }
}

Languages.propTypes = {
  languages: React.PropTypes.object.isRequired,
}

export default Languages
