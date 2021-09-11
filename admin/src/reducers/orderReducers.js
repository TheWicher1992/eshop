import { GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "../actions/types";

export const getOrdersReducer = (state = { orders: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state, loading: true
      }
    case GET_ORDER_SUCCESS:
      return {
        loading: false,
        orders: [...action.payload]
      }
    case GET_ORDER_FAIL:
      return {
        loading: false,
        orders: [],
        error: action.payload
      }

    default:
      return state
  }
}
