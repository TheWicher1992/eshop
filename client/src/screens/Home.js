import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from 'axios'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products`)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Latest Products!</h1>
      <div className="row">
        {products.map((product) => (
          <div
            key={product._id}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
