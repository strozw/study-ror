import React from 'react'
import LinkList from '../molecules/LinkList'

export default class Drawer extends React.Component {
  constructor(props) {
    super(props)
    this.mdcDrawer = null
  }

  componentDidMount() {
    this.mdcDrawer = new mdc.drawer.MDCTemporaryDrawer(
      document.querySelector('.mdc-drawer--temporary')
    )
    this.mdcDrawer.open = false
  }

  componentWillUnmount() {
    this.mdcDrawer = null
  }

  componentDidUpdate() {
    this.mdcDrawer.open = this.props.open
  }

  render() {
    return (
      <aside className="mdc-drawer mdc-drawer--temporary mdc-typography">
        <nav className="mdc-drawer__drawer">
          <header className="mdc-drawer__header">
            <div className="mdc-drawer__header-content  mdc-theme--on-primary mdc-theme--primary-bg">
              Contents
            </div>
          </header>
          <div className="mdc-drawer__content">
            <LinkList />
          </div>
        </nav>
      </aside>
    )
  }
}
