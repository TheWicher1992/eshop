import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer, paymentTypeReducer, shippingAddressReducer } from './reducers/cartReducers'
import { authReducer, profileReducer } from './reducers/authReducers'
import { placeOrderReducer } from './reducers/orderReducers'

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems')) : []

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')) : null

const shippingAddress = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : { address: null, city: null, postal: null }
const paymentType = localStorage.getItem('paymentType') ? JSON.parse(localStorage.getItem('paymentType')) : { paymentType: null }


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
  auth: authInitialState,
  shippingAddress,
  paymentType
}

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  auth: authReducer,
  profile: profileReducer,
  shippingAddress: shippingAddressReducer,
  paymentType: paymentTypeReducer,
  placeOrder: placeOrderReducer
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
