import { FETCH_FULFILLED } from './actions'

const initialState = {
  data: [],
  loading: true,
}

export default function beers (state = initialState, action) {
  switch (action.type) {
    case FETCH_FULFILLED: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
