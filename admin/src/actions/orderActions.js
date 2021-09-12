import axios from 'axios'
import axiosCancel from '../utils/axiosCancelToken'
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

let cancelGetOrders;
export const getOrders = ({ query = null, page = 1, limit = 20, sort = 'createdAt' } = {}) => async dispatch => {
  try {
    cancelGetOrders && cancelGetOrders.cancel()
    dispatch({
      type: GET_ORDER_REQUEST
    })



    let urlQueryString = `page=${page}&limit=${limit}&sort=${sort}` + (query !== null ? `&query=${query.trim().split(' ').join(',')}` : '')
    console.log(urlQueryString)
    cancelGetOrders = axios.CancelToken.source()
    const { data } = await axios.get(`/api/orders?${urlQueryString}`, {
      cancelToken: cancelGetOrders.token
    })


    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: data
    })

  } catch (err) {
    if (!axios.isCancel(err)) {
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
}
