import axios from "axios"
import { DASHBOARD_LATESTORDERS_FAIL, DASHBOARD_LATESTORDERS_REQUEST, DASHBOARD_LATESTORDERS_SUCCESS, DASHBOARD_STATS_FAIL, DASHBOARD_STATS_REQUEST, DASHBOARD_STATS_SUCCESS, DASHBOARD_RECENTPRODUCTS_FAIL, DASHBOARD_RECENTPRODUCTS_REQUEST, DASHBOARD_RECENTPRODUCTS_SUCCESS } from "./types"


export const getRecentProducts = () => async dispatch => {
  try {
    dispatch({
      type: DASHBOARD_RECENTPRODUCTS_REQUEST
    })
    const { data } = await axios.get('/api/admin/dashboard/recent-products')
    dispatch({
      type: DASHBOARD_RECENTPRODUCTS_SUCCESS,
      payload: data
    })

  } catch (err) {
    console.log(err)
    dispatch({
      type: DASHBOARD_RECENTPRODUCTS_FAIL,
      payload: err.response &&
        err.response.data.error ?
        err.response.data.error :
        err.message
    })
  }
}

export const getLatestOrders = () => async dispatch => {
  try {
    dispatch({
      type: DASHBOARD_LATESTORDERS_REQUEST
    })
    const { data } = await axios.get('/api/admin/dashboard/latest-orders')
    dispatch({
      type: DASHBOARD_LATESTORDERS_SUCCESS,
      payload: data
    })

  } catch (err) {
    console.log(err)
    dispatch({
      type: DASHBOARD_LATESTORDERS_FAIL,
      payload: err.response &&
        err.response.data.error ?
        err.response.data.error :
        err.message
    })
  }
}

export const getStats = () => async dispatch => {
  try {
    dispatch({
      type: DASHBOARD_STATS_REQUEST
    })
    const { data } = await axios.get('/api/admin/dashboard/stats')
    dispatch({
      type: DASHBOARD_STATS_SUCCESS,
      payload: data
    })

  } catch (err) {
    console.log(err)
    dispatch({
      type: DASHBOARD_STATS_FAIL,
      payload: err.response &&
        err.response.data.error ?
        err.response.data.error :
        err.message
    })
  }
}
