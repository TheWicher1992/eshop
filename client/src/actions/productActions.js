import types from './types/productTypes'
import axios from 'axios'
import { toast } from 'react-toastify'

export const getProductList = () => async dispatch => {
  try {
    dispatch({
      type: types.PRODUCT_LIST_REQUEST
    })
    const { data } = await axios.get(`/api/products`)

    dispatch({
      type: types.PRODUCT_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    console.log(error.message)
    toast.error("Something went wrong.")
    dispatch({
      type: types.PRODUCT_LIST_FAIL,
      payload: error.response &&
        error.response.data.error ?
        error.response.data.error :
        error.message
    })
  }


}

export const getProductDetail = (id) => async dispatch => {
  try {
    dispatch({
      type: types.PRODUCT_DETAIL_REQUEST
    })

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: types.PRODUCT_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    console.log(error)
    toast.error("Something went wrong.")
    dispatch({
      type: types.PRODUCT_DETAIL_FAIL,
      payload: error.response &&
        error.response.data.error ?
        error.response.data.error :
        error.message
    })
  }
}
