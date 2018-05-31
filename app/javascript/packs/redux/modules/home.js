import { createActions, handleActions, combineActions } from 'redux-actions'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const types = {
  FETH_REQUEST: 'HOME/FETCH_REQUEST',
  FETH_SUCCESS: 'HOME/FETCH_SUCCESS',
  FETH_FAILED: 'HOME/FETCH_FAILED'
}

export const actions = createActions({
  [types.FETH_REQUEST]: () => {}
})

export const sagas = {
  *fetch() {}
}

export function* saga() {
  yield takeLatest(types.FETH_DATA, sagas.fetch)
}

export default handleActions({
  [types.FETH_SUCCESS]: function(state, action) {}
})
