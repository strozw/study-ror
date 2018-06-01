import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'

import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from 'react-router-redux/index.js'

import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import routes from './routes'

const history = createHistory()
// const sagaMiddleware = createSagaMiddleware()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(middleware))
)

const Routes = () => renderRoutes(routes);

const rootDOM = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  rootDOM
)
