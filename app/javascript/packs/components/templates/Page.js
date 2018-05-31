import React from 'react'

export default class Page extends React.Component {
  render() {
    return (
      <div className="mdc-layout-grid">
        <h1 className="mdc-typography--headline1">{this.props.title}</h1>
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell"></div>
          <div className="mdc-layout-grid__cell">
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }
}
