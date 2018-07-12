import React from 'react'
import Page from '../templates/Page'

export default class Movies extends React.Component {
  render() {
    return (
      <Page title="Movies">
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              First-line text
              <span class="mdc-list-item__secondary-text">
                Second-line text
              </span>
            </span>
            <span class="mdc-list-item__meta material-icons" aria-hidden="true">
              info
            </span>
          </li>
          <li role="separator" class="mdc-list-divider" />

          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              First-line text
              <span class="mdc-list-item__secondary-text">
                Second-line text
              </span>
            </span>
            <span class="mdc-list-item__meta material-icons" aria-hidden="true">
              info
            </span>
          </li>

          <li role="separator" class="mdc-list-divider" />
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              First-line text
              <span class="mdc-list-item__secondary-text">
                Second-line text
              </span>
            </span>
            <span class="mdc-list-item__meta material-icons" aria-hidden="true">
              info
            </span>
          </li>
          <li role="separator" class="mdc-list-divider" />
        </ul>
      </Page>
    )
  }
}
