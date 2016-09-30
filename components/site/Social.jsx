import React from 'react'
import { Link } from 'react-router'
import { IoEmail, IoSocialGithub, IoSocialLinkedin } from 'react-icons/lib/io'
// import { FaLinkedin, FaGithub } from 'react-icons/lib/fa'

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
            <Link className="social-button" key={key} to={link} title={title}>
              {icon}
            </Link>
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
