import { combineReducers } from 'redux'

import servicesReducer from './features/servicesSlice'
import filtersReducer from './features/filtersSlice'

const rootReducer = combineReducers({
  services: servicesReducer,
  filters: filtersReducer
})

export default rootReducer;