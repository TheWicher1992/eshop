import types from '../actions/types/productTypes'
export const productListReducer = (state = { loading: false, products: [], error: null }, action) => {
  switch (action.type) {
    case types.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [], error: null }
    case types.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload, error: null }
    case types.PRODUCT_LIST_FAIL:
      return { loading: false, products: [], error: action.payload }
    default:
      return state
  }
}
