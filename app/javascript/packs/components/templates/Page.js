import React from 'react'
import { Flex, Box } from 'rebass'

export default class Page extends React.Component {
  render() {
    return (
      <Box p={3}>
        <h1 className="mdc-typography--headline1">{this.props.title}</h1>
        <Box>
          <div>{this.props.children}</div>
        </Box>
      </Box>
    )
  }
}
