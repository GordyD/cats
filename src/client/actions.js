import * as types from './constants'
import { getCats } from './service/cats'

export function loadCats() {
  return dispatch => {
    dispatch(loadCatsRequest())

    getCats()
    .then(cats => dispatch(loadCatsSuccess(cats)))
    .catch(error => dispatch(loadCatsFailure(error)))
  }
}

export function loadCatsRequest() {
  return {
    type: types.LOAD_CATS_REQUEST
  }
}

export function loadCatsSuccess(cats) {
  return {
    type: types.LOAD_CATS_SUCCESS,
    cats
  }
}

export function loadCatsFailure(error) {
  return {
    type: types.LOAD_CATS_FAILURE,
    error
  }
}

export function addCat(cat) {
  return {
    type: types.ADD_CAT,
    cat
  }
}

export function removeCat(cat) {
  return {
    type: types.REMOVE_CAT,
    cat
  }
}

export function moveCat(fromId, toId) {
  return {
    type: types.MOVE_CAT,
    fromId,
    toId
  }
}

export function toggleOrderByLength() {
  return {
    type: types.TOGGLE_ORDER_BY_LENGTH
  }
}