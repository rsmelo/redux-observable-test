import { createStore, combineReducers } from 'redux'

import appReducer from './reducers/app'

export default function configureStore() {
  const rootReducer = combineReducers({
    app: appReducer
  })
  return createStore(rootReducer)
}
