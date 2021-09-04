import types from '../actions/types/productTypes'

const productListState = { loading: false, products: [], error: null }

export const productListReducer = (state = productListState, action) => {
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

const productDetailState = { loading: false, product: {}, error: null }

export const productDetailReducer = (state = productDetailState, action) => {
  switch (action.type) {
    case types.PRODUCT_DETAIL_REQUEST:
      return { product: {}, error: null, loading: true }
    case types.PRODUCT_DETAIL_SUCCESS:
      return { ...state, loading: false, product: action.payload }
    case types.PRODUCT_DETAIL_FAIL:
      return { loading: false, product: {}, error: action.payload }
    default:
      return state
  }
}
