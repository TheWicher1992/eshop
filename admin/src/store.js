import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { dashboardLatestOrdersReducer, dashboardStatsReducer, dashboardRecentProductsReducer } from './reducers/dashboardReducers'
import { getOrdersReducer } from './reducers/orderReducers'


const initialState = {}

const rootReducer = combineReducers({
  dashboardStats: dashboardStatsReducer,
  dashboardLatestOrders: dashboardLatestOrdersReducer,
  dashboardRecentProducts: dashboardRecentProductsReducer,
  orders: getOrdersReducer
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
