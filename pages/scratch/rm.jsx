import React from 'react'
import Markdown from 'react-markdown'
import { Title } from '../../components/Title'


const test = [
  '## A Markdown Test\n\n',
  '### Why do I only get h3?\n\n',
  'Stop yer whinging... I don\'t even have any styling.... just a plain ol\' p.\n\n',
  '![screenie](/images/evolution-thumb.jpg)\n\n'
].join('')

class ReactMarkdownTest extends React.Component {
  render () {
    return (
      <div className="container">
        <Title title="Thees Eees Markdown!!" />
        <div className="rmtest">
          <Markdown source={test} />
        </div>
      </div>
    )
  }
}

export default ReactMarkdownTest
