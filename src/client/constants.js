/**
 * For async actions we need three constants for each component part of the process:
 *  - request
 *  - successful response
 *  - failure response
 */
export const LOAD_CATS_REQUEST = 'LOAD_CATS_REQUEST'
export const LOAD_CATS_SUCCESS = 'LOAD_CATS_SUCCESS'
export const LOAD_CATS_FAILURE = 'LOAD_CATS_FAILURE'

export const MOVE_CAT = 'MOVE_CAT'
export const REMOVE_CAT = 'REMOVE_CAT'
export const ADD_CAT = 'ADD_CAT'
export const TOGGLE_ORDER_BY_LENGTH = 'TOGGLE_ORDER_BY_LENGTH'