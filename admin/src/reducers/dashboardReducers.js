import { DASHBOARD_LATESTORDERS_FAIL, DASHBOARD_LATESTORDERS_REQUEST, DASHBOARD_LATESTORDERS_SUCCESS, DASHBOARD_RECENTPRODUCTS_FAIL, DASHBOARD_RECENTPRODUCTS_REQUEST, DASHBOARD_RECENTPRODUCTS_SUCCESS, DASHBOARD_STATS_FAIL, DASHBOARD_STATS_REQUEST, DASHBOARD_STATS_SUCCESS } from "../actions/types";


export const dashboardRecentProductsReducer = (state = { products: [], loading: false }, action) => {
  switch (action.type) {
    case DASHBOARD_RECENTPRODUCTS_REQUEST:
      return {
        ...state, loading: true
      }

    case DASHBOARD_RECENTPRODUCTS_SUCCESS:
      return {
        loading: false,
        products: [...action.payload]
      }
    case DASHBOARD_RECENTPRODUCTS_FAIL:
      return {
        products: [],
        loading: false
      }
    default:
      return state
  }
}



export const dashboardLatestOrdersReducer = (state = { orders: [], loading: false }, action) => {
  switch (action.type) {
    case DASHBOARD_LATESTORDERS_REQUEST:
      return {
        ...state, loading: true
      }

    case DASHBOARD_LATESTORDERS_SUCCESS:
      return {
        loading: false,
        orders: [...action.payload]
      }
    case DASHBOARD_LATESTORDERS_FAIL:
      return {
        orders: [],
        loading: false
      }
    default:
      return state
  }
}




export const dashboardStatsReducer = (state = { stats: {}, loading: false }, action) => {
  switch (action.type) {
    case DASHBOARD_STATS_REQUEST:
      return {
        ...state, loading: true
      }

    case DASHBOARD_STATS_SUCCESS:
      return {
        loading: false,
        stats: { ...action.payload }
      }
    case DASHBOARD_STATS_FAIL:
      return {
        stats: {},
        loading: false
      }
    default:
      return state
  }
}
