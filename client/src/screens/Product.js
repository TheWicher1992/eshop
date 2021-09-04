import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import Spinner from "../components/Spinner";
import { getProductDetail } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
const Product = ({ match, history }) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { product, error, loading } = productDetail;

  useEffect(() => {
    dispatch(getProductDetail(match.params.id));
  }, [match, dispatch]);

  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
    history.push("/cart");
  };
  return (
    <>
      <Link to="/" className="btn btn-outline-dark">
        Go back
      </Link>
      <Spinner loading={loading} />
      {error && (
        <div className="text-center">
          <h2>Oopss, Something fishy happened!</h2>
        </div>
      )}
      {!loading && !error && (
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
              <li className="list-group-item">
                Description: {product.description}
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="row">
                  <div className="col">Price:</div>
                  <div className="col">${product.price}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">Status:</div>
                  <div className="col">
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
              </li>
              {product.countInStock > 0 && (
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Quantity:</div>
                    <div className="col">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        value={quantity}
                      >
                        {[...Array(product.countInStock).keys()].map((k) => (
                          <option key={k + 1} value={k + 1}>
                            {k + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
              )}
              <li className="list-group-item">
                <div className="d-grid gap-2">
                  <button
                    disabled={product.countInStock === 0}
                    className="btn btn-dark"
                    type="button"
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
