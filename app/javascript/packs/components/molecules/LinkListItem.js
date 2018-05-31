import React from 'react'

export default class LinkListItem extends React.Component {
  render() {
    return (
      <a className="mdc-list-item" href="#">
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
          {this.props.icon}
        </i>
        {this.props.label}
      </a>
    )
  }
}
