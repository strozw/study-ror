import React from 'react'
import { renderRoutes } from 'react-router-config'
import Drawer from './organisms/Drawer'
import Header from './organisms/Header'

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
        <Drawer open="{this.state.drawerOpen}" />
        <Header title={this.props.title} menuClick={this.menuClick} />
        <main className="mdc-top-app-bar--fixed-adjust">{renderRoutes(this.props.route.routes)}</main>
      </div>
    )
  }
}
