import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux/index.js'

// import saga from './sagas'

const history = createHistory()
// const sagaMiddleware = createSagaMiddleware()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(middleware))
)

// sagaMiddleware.run(saga)

export default store
