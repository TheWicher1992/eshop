import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleQuanitity = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <div className="row">
      <h2>Shopping Cart</h2>
      <div className="col-8">
        <ul class="list-group list-group-flush">
          {cartItems.map((item) => (
            <li class="list-group-item">
              <div className="row">
                <div className="col-2">
                  <img className="img-fluid" src={item.image} alt="" />
                </div>
                <div className="col-4">
                  <h6>{item.name}</h6>
                </div>
                <div className="col-2">${item.price}</div>
                <div className="col-2">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) =>
                      handleQuanitity(item.id, parseInt(e.target.value))
                    }
                    value={item.qty}
                  >
                    {[...Array(item.countInStock).keys()].map((k) => (
                      <option key={k + 1} value={k + 1}>
                        {k + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <button onClick={() => handleRemove(item.id)} type="button" className="btn">
                    <i style={{ color: "brown" }} className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-4 text-center">
        <ul class="list-group">
          <li class="list-group-item">
            <h3>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h3>
          </li>
          <li class="list-group-item">
            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
          </li>
          <li class="list-group-item">
            <div className="d-grid gap-2">
              <button className="btn btn-dark" type="button">
                Checkout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
