import React from 'react'

const ProductList = () => {
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
          <li className="item">
            <div className="product-img">
              <img
                src="dist/img/default-150x150.png"
                alt="Product Image"
                className="img-size-50"
              />
            </div>
            <div className="product-info">
              <a
                href=""
                className="product-title"
              >
                Samsung TV
                <span className="badge badge-warning float-right">
                  $1800
                </span>
              </a>
              <span className="product-description">
                Samsung 32" 1080p 60Hz LED Smart HDTV.
              </span>
            </div>
          </li>
          {/* /.item */}
          <li className="item">
            <div className="product-img">
              <img
                src="dist/img/default-150x150.png"
                alt="Product Image"
                className="img-size-50"
              />
            </div>
            <div className="product-info">
              <a
                href=""
                className="product-title"
              >
                Bicycle
                <span className="badge badge-info float-right">
                  $700
                </span>
              </a>
              <span className="product-description">
                26" Mongoose Dolomite Men's 7-speed, Navy Blue.
              </span>
            </div>
          </li>
          {/* /.item */}
          <li className="item">
            <div className="product-img">
              <img
                src="dist/img/default-150x150.png"
                alt="Product Image"
                className="img-size-50"
              />
            </div>
            <div className="product-info">
              <a
                href=""
                className="product-title"
              >
                Xbox One{" "}
                <span className="badge badge-danger float-right">
                  $350
                </span>
              </a>
              <span className="product-description">
                Xbox One Console Bundle with Halo Master Chief
                Collection.
              </span>
            </div>
          </li>
          {/* /.item */}
          <li className="item">
            <div className="product-img">
              <img
                src="dist/img/default-150x150.png"
                alt="Product Image"
                className="img-size-50"
              />
            </div>
            <div className="product-info">
              <a
                href=""
                className="product-title"
              >
                PlayStation 4
                <span className="badge badge-success float-right">
                  $399
                </span>
              </a>
              <span className="product-description">
                PlayStation 4 500GB Console (PS4)
              </span>
            </div>
          </li>
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
