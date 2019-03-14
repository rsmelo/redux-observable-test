import { createStore, applyMiddleware, compose } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import rootReducer from './reducers'
import fetchBeersEpic from './epics/fetchBeers'

export default function configureStore() {
  const rootEpic = combineEpics(fetchBeersEpic)

  const epicMiddleware = createEpicMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancers = composeEnhancers(applyMiddleware(epicMiddleware))

  const store = createStore(rootReducer, enhancers)

  epicMiddleware.run(rootEpic)

  return store
}
