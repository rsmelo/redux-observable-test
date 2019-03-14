const initialState = {
  name: 'test'
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
