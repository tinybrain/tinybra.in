import React from 'react'
import { IoEmail, IoSocialGithub, IoSocialLinkedin } from 'react-icons/lib/io'

import './Social.css'

const socialItems = [
  {
    title: 'Email',
    link: 'mailto:simon@tinybra.in',
    icon: <IoEmail />,
  },
  {
    title: 'GitHub',
    link: 'https://www.github.com/tinybrain',
    icon: <IoSocialGithub />,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tinybrain',
    icon: <IoSocialLinkedin />,
  },
]

class Social extends React.Component {

  getChildContext () {
    return {
      reactIconBase: {
        size: 20,
      }
    }
  }

  render () {
    return (
      <div className="social">
        {socialItems.map((item, key) => {
          const { title, link, icon } = item
          return (
            <a className="social-button" key={key} href={link} title={title}>
              {icon}
            </a>
          )
        })}
      </div>
    )
  }
}

Social.childContextTypes = {
  reactIconBase: React.PropTypes.object,
}

Social.propTypes = {
  // nav: React.PropTypes.object.isRequired,
}

export default Social
