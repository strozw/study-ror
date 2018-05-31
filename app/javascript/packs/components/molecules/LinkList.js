import React from 'react'
import LinkListItem from './LinkListItem'

export default class LinkList extends React.Component {
  render() {
    const items = [
      {
        link: null,
        label: 'Movies',
        icon: 'movie'
      },
      {
        link: null,
        label: 'Persons',
        icon: 'person'
      }
    ]

    return (
      <nav className="mdc-list">
        {items.map((item, i) => {
          return <LinkListItem key={i} label={item.label} icon={item.icon} />
        })}
      </nav>
    )
  }
}
