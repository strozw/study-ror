import React from 'react'
import LinkListItem from './LinkListItem'

export default class LinkList extends React.Component {
  render() {
    return (
      <nav className="mdc-list">
        {this.props.items.map((item, i) => {
          return (
            <LinkListItem
              key={i}
              label={item.label}
              icon={item.icon}
              to={item.to}
            />
          )
        })}
      </nav>
    )
  }
}
