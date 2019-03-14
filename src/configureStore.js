import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
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
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancers = composeEnhancers(applyMiddleware(epicMiddleware))

  const store = createStore(rootReducer, enhancers)

  epicMiddleware.run(rootEpic)

  return store
}
