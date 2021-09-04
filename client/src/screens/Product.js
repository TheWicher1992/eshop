import React from "react";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";
const Product = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Link to="/" className="btn btn-outline-dark">
        Go back
      </Link>
      <div className="row my-3">
        <div className="col-6">
          <img src={product.image} className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h3>{product.name}</h3>
            </li>
            <li class="list-group-item">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </li>
            <li class="list-group-item">Price: ${product.price}</li>
            <li class="list-group-item">Description: {product.description}</li>
          </ul>
        </div>
        <div className="col-3">
          <ul class="list-group">
            <li class="list-group-item">Price: ${product.price}</li>
            <li class="list-group-item">
              Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </li>
            <li class="list-group-item">
              <div class="d-grid gap-2">
                <button
                  disabled={product.countInStock === 0}
                  class="btn btn-dark"
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Product;
