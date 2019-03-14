import { combineReducers } from 'redux'

import app from './app'
import beers from './beers'

const rootReducer = combineReducers({
  app,
  beers,
})

export default rootReducer
