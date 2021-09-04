import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from 'axios'
const Product = ({ match }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [match])


  return (
    <>
      <Link to="/" className="btn btn-outline-dark">
        Go back
      </Link>
      <div className="row my-3">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src={product.image} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{product.name}</h3>
            </li>
            <li className="list-group-item">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </li>
            <li className="list-group-item">Price: ${product.price}</li>
            <li className="list-group-item">Description: {product.description}</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3">
          <ul className="list-group">
            <li className="list-group-item">Price: ${product.price}</li>
            <li className="list-group-item">
              Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </li>
            <li className="list-group-item">
              <div className="d-grid gap-2">
                <button
                  disabled={product.countInStock === 0}
                  className="btn btn-dark"
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
