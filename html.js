import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          {/* <link rel="shortcut icon" href={this.props.favicon} /> */}
          <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Oswald:300,400" rel="stylesheet" />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src="/js/polyfill.js" />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
