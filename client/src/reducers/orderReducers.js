import { PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL, PLACE_ORDER_RESET, GET_ORDER_FAIL, GET_ORDER_SUCCESS, GET_ORDER_REQUEST, GET_USER_ORDERS_SUCCESS, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_FAIL } from '../actions/types/orderTypes'



export const userOrdersReducer = (state = { orders: [], loading: false, error: null }, action) => {

  switch (action.type) {
    case GET_USER_ORDERS_REQUEST:
      return {
        orders: [], loading: true, error: null
      }

    case GET_USER_ORDERS_SUCCESS:
      return {
        orders: [...action.payload], loading: false, error: null
      }

    case GET_USER_ORDERS_FAIL:
      return {
        orders: [], loading: false, error: "Orders cannot be GET"
      }

    default:
      return state
  }

}


export const getOrderReducer = (state = { error: null, loading: false, order: { shippingAddress: {}, orderItems: [] } }, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        error: null,
        loading: true,
        order: null
      }
    case GET_ORDER_SUCCESS:
      return {
        error: null,
        loading: false,
        order: action.payload
      }
    case GET_ORDER_FAIL:
      return {
        error: "Cant get Order",
        loading: false,
        order: null
      }
    default:
      return state
  }
}


export const placeOrderReducer = (state = { success: null, orderId: null }, action) => {
  switch (action.type) {
    case PLACE_ORDER_SUCCESS:
      return {
        success: true,
        orderId: action.payload
      }
    case PLACE_ORDER_FAIL:
      return {
        success: false,
        orderId: null
      }
    case PLACE_ORDER_RESET:
      return {
        success: null,
        orderId: null
      }
    default:
      return state
  }

}
