import axios from 'axios'
import { GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from './types'
export const getOrders = () => async dispatch => {
  try {

    dispatch({
      type: GET_ORDER_REQUEST
    })

    const { data } = await axios.get('/api/orders')

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
