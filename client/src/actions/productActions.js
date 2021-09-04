import types from './types/productTypes'
import axios from 'axios'
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
    dispatch({
      type: types.PRODUCT_LIST_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }


}
