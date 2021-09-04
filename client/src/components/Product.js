import React from "react";
import { Link } from "react-router-dom"
import Rating from "./Rating";
const Product = ({ product }) => {
  return (
    <div className="card p-2 m-2 rounded">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          className="card-img-top"
          alt={`${product.name}`}
        />
      </Link>
      <div className="card-body">
        <Link className="link-secondary" to={`/product/${product._id}`}>
          <div className="card-title">
            <strong>{product.name}</strong>
          </div>
        </Link>
        <div className="card-text">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <h4 className="card-text py-2">${product.price}</h4>
      </div>
    </div>
  );
};

export default Product;
