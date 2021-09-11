import axios from 'axios'
import { GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_STATS_FAIL, GET_ORDER_STATS_REQUEST, GET_ORDER_STATS_SUCCESS, GET_ORDER_SUCCESS } from './types'

export const getOrderStats = () => async dispatch => {
  try {

    dispatch({
      type: GET_ORDER_STATS_REQUEST
    })

    const { data } = await axios.get('/api/orders/stats')

    dispatch({
      type: GET_ORDER_STATS_SUCCESS,
      payload: data
    })

  } catch (err) {
    console.log(err)
    dispatch({
      type: GET_ORDER_STATS_FAIL,
      payload: err.response &&
        err.response.data.error ?
        err.response.data.error :
        err.message
    })
  }
}

export const getOrders = (page = 1, limit = 10, sort = 'createdAt') => async dispatch => {
  try {

    dispatch({
      type: GET_ORDER_REQUEST
    })

    const { data } = await axios.get(`/api/orders?page=${page}&limit=${limit}&sort=${sort}`)

    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: data
    })

  } catch (err) {
    console.log(err)
    dispatch({
      type: GET_ORDER_FAIL,
      payload: err.response &&
        err.response.data.error ?
        err.response.data.error :
        err.message
    })
  }
}
