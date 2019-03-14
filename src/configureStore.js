import { createStore, combineReducers, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { of } from 'rxjs';

import appReducer from './reducers/app'

const epic1 = () => of({
  type: "SET_NAME",
  payload: "Sally",
})

export default function configureStore() {
  const rootEpic = combineEpics(epic1)
  const rootReducer = combineReducers({
    app: appReducer
  })
  const epicMiddleware = createEpicMiddleware()
  const middlewares = applyMiddleware(epicMiddleware)

  const store = createStore(rootReducer, middlewares)

  epicMiddleware.run(rootEpic)

  return store
}
