import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecentProducts } from '../actions/dashboardActions'

const ProductList = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.dashboardRecentProducts)
  useEffect(() => {
    dispatch(getRecentProducts())
  }, [dispatch])
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Recently Added Products</h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus" />
          </button>
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="remove"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <ul className="products-list product-list-in-card pl-2 pr-2">
          {
            products.map(product => (
              <li key={product._id} className="item">
                <div className="product-img">
                  <img
                    src={`${product.image}`}
                    alt="Product"
                    className="img-size-50"
                  />
                </div>
                <div className="product-info">
                  <a
                    href=""
                    className="product-title"
                  >
                    {product.name}
                    <span className="badge badge-success float-right">
                      ${product.price}
                    </span>
                  </a>
                  <span className="product-description">
                    Brand: {product.brand}, Category: {product.category}
                    <p className='text-wrap'>{product.description}</p>
                  </span>
                </div>
              </li>
            ))
          }

          {/* /.item */}
          {/* /.item */}
        </ul>
      </div>
      {/* /.card-body */}
      <div className="card-footer text-center">
        <a href="" className="uppercase">
          View All Products
        </a>
      </div>
      {/* /.card-footer */}
    </div>

  )
}

export default ProductList
