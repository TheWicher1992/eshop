import React from "react";
import Product from "../components/Product";
import products from "../products";
const Home = () => {
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
