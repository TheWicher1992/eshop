import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { getProductDetail } from "../actions/productActions";
import Spinner from "../components/Spinner";

const Product = ({ match }) => {
  const dispatch = useDispatch()
  const productDetail = useSelector(state => state.productDetail)
  const { product, error, loading } = productDetail

  useEffect(() => {
    dispatch(getProductDetail(match.params.id))
  }, [match, dispatch])

  return (
    <>
      <Link to="/" className="btn btn-outline-dark">
        Go back
      </Link>
      <Spinner loading={loading} />
      {error &&
        <div className='text-center'>
          <h2>Oopss, Something fishy happened!</h2>
        </div>
      }
      {!loading && !error && <div className="row my-3">
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
      }
    </>
  );
};

export default Product;
