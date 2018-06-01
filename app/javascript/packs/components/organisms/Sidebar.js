import React from 'react'
import LinkList from '../molecules/LinkList'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.mdcDrawer = null
  }

  componentDidMount() {
    this.mdcDrawer = new mdc.drawer.MDCPersistentDrawer(
      document.querySelector('.mdc-drawer--persistent')
    )

    this.mdcDrawer.open = true
  }

  componentWillUnmount() {
    this.mdcDrawer = null
  }

  componentDidUpdate() {
    this.mdcDrawer.open = this.props.open
  }

  static get defaultProps() {
    return {
      items: [
        {
          to: "/",
          label: 'Home',
          icon: 'home'
        },
        {
          to: "/movies",
          label: 'Movies',
          icon: 'movie'
        },
        {
          to: "/persons",
          label: 'Persons',
          icon: 'person'
        }
      ]
    }
  }

  render() {
    return (
      <aside className="mdc-drawer mdc-drawer--persistent mdc-typography">
        <nav className="mdc-drawer__drawer">
          <div className="mdc-drawer__content">
            <LinkList items={this.props.items} />
          </div>
        </nav>
      </aside>
    )
  }
}

