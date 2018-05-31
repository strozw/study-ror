import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="develop-toolbar mdc-toolbar mdc-toolbar--fixed mdc-toolbar--platform">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button
              className="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
              onClick={this.props.menuClick}
            >
              menu
            </button>
            <span className="mdc-top-app-bar__title">{this.props.title}</span>
          </section>
        </div>
      </header>
    )
  }
}

export default Header
