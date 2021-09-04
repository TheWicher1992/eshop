import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../actions/productActions'
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
const Home = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])

  return (
    <div>
      {!loading && <h1>Latest Products!</h1>}
      <Spinner loading={loading} />
      {error && <div className='text-center'><h2>Oopss, Something fishy happened!</h2></div>}
      {
        !loading && <div className="row">
          {products.map((product) => (
            <div
              key={product._id}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
            >
              <Product product={product} />
            </div>
          ))}
        </div>
      }

    </div>
  );
};

export default Home;
