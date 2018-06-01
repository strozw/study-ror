import React from 'react'
import { Flex, Box } from 'rebass'
import { renderRoutes } from 'react-router-config'
import Sidebar from './organisms/Sidebar'
import Header from './organisms/Header'

const MainBox = Box.extend`
  min-height: 100vh;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.menuClick = this.menuClick.bind(this)
  }

  menuClick() {
    this.setState({ drawerOpen: true })
    console.log(this)
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} menuClick={this.menuClick} />
        <Flex className="mdc-top-app-bar--fixed-adjust">
          <Sidebar open="{this.state.drawerOpen}" />
          <MainBox width="100%">
            {renderRoutes(this.props.route.routes)}
          </MainBox>
        </Flex>
      </div>
    )
  }
}
