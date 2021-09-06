import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { authReducer } from './reducers/authReducers'

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems')) : []

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')) : null
const authInitialState =
{
  isAuthenticated: user !== null,
  user: user,
  error: null,
  loading: false
}
const initialState = {
  cart: {
    cartItems: cartItems
  },
  auth: authInitialState
}

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  auth: authReducer
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
