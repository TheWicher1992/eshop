import axios from 'axios'
import { PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL, GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from './types/orderTypes'
import types from './types/cartTypes'


export const getOrder = (orderId) => async dispatch => {
  try {
    dispatch({
      type: GET_ORDER_REQUEST
    })

    const config = {
      headers: {
        'x-auth-token': JSON.parse(localStorage.getItem('token'))
      }
    }

    const { data } = await axios.get(`/api/orders/${orderId}`, config)

    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: data
    })

  } catch (error) {
    console.log(error)
    dispatch({
      type: GET_ORDER_FAIL,
      payload: error.response &&
        error.response.data.error ?
        error.response.data.error :
        error.message
    })
  }
}

export const placeOrder = (orderItems, shippingAddress, paymentMethod) => async dispatch => {
  try {


    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': JSON.parse(localStorage.getItem('token'))
      }
    }

    const { data } = await axios.post('/api/orders', { orderItems, shippingAddress, paymentMethod }, config)

    dispatch({
      type: PLACE_ORDER_SUCCESS,
      payload: data._id
    })
    dispatch({
      type: types.CLEAR_CART
    })

  } catch (error) {
    console.log(error)
    dispatch({
      type: PLACE_ORDER_FAIL,
      payload: error.response &&
        error.response.data.error ?
        error.response.data.error :
        error.message
    })
  }
}
