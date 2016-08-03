import * as types from './constants'

export const initialState = {
  isWorking: false,
  error: null,
  cats: [],
  orderByLength: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_CATS_REQUEST: 
      return Object.assign({}, state, {
        isWorking: true,
        error: null,
        cats: []
      })
    case types.LOAD_CATS_SUCCESS:
      return Object.assign({}, state, {
        isWorking: false,
        cats: action.cats
      })
    case types.LOAD_CATS_FAILURE: 
      return Object.assign({}, state, {
        isWorking: false,
        error: action.error
      })
    case types.ADD_CAT:
      return Object.assign({} , state, {
        cats: Object.assign([], state.cats, [ action.cat ])
      })
    case types.REMOVE_CAT:
      return Object.assign({} , state, {
        cats: state.cats.filter(cat => cat.id !== action.cat.id)
      })
    case types.TOGGLE_ORDER_BY_LENGTH:
      return Object.assign({}, state, {
        orderByLength: !state.orderByLength
      })
    default:
      return state
  }
}