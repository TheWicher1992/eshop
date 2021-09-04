import React from "react";
import Rating from "./Rating";
const Product = ({ product }) => {
  return (
    <div className="card p-2 m-2 rounded">
      <img
        src={product.image}
        className="card-img-top"
        alt={`${product.name}`}
      />
      <div className="card-body">
        <div className="card-title">
          <strong>{product.name}</strong>
        </div>
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
