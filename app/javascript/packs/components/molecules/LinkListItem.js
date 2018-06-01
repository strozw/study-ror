import React from 'react'
import { NavLink } from 'react-router-dom'

export default class LinkListItem extends React.Component {
  render() {
    return (
      <NavLink
        className="mdc-list-item"
        activeClassName="mdc-list-item--activated"
        to={this.props.to}
      >
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
          {this.props.icon}
        </i>
        {this.props.label}
      </NavLink>
    )
  }
}
