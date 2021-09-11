import { GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_STATS_FAIL, GET_ORDER_STATS_REQUEST, GET_ORDER_STATS_SUCCESS, GET_ORDER_SUCCESS } from "../actions/types";


export const orderStatsReducer = (state = { stats: {}, loading: false }, action) => {
  switch (action.type) {
    case GET_ORDER_STATS_REQUEST:
      return {
        ...state, loading: true
      }
    case GET_ORDER_STATS_SUCCESS:
      return {
        loading: false,
        stats: action.payload
      }
    case GET_ORDER_STATS_FAIL:
      return {
        loading: false,
        stats: {},
      }

    default:
      return state
  }
}

export const getOrdersReducer = (state = { orders: [], totalPages: 0, totalOrders: 0, loading: false, error: null }, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state, loading: true
      }
    case GET_ORDER_SUCCESS:
      return {
        loading: false,
        orders: [...action.payload.orders],
        totalOrders: action.payload.totalOrders,
        totalPages: action.payload.totalPages
      }
    case GET_ORDER_FAIL:
      return {
        loading: false,
        orders: [],
        error: action.payload,
        totalOrders: 0,
        totalPages: 0
      }

    default:
      return state
  }
}
