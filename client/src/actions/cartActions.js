import types from "./types/cartTypes";
import axios from "axios";
import { toast } from "react-toastify";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: types.CART_ADD_ITEM,
      payload: {
        id: data._id,
        image: data.image,
        name: data.name,
        countInStock: data.countInStock,
        qty,
        price: data.price
      }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

  } catch (error) {
    console.log(error)
    toast.error("Something went wrong.")
    dispatch({
      type: types.CART_ADD_FAIL,
      payload: error.response &&
        error.response.data.error ?
        error.response.data.error :
        error.message
    })
  }


}
