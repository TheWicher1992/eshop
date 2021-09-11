import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = (state = {}) => {
  return state
}

const initialState = {
  reducer: { name: 'sameer' }
}

const rootReducer = combineReducers({
  reducer
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
