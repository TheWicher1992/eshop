import React from "react";
import { useSelector } from "react-redux";

const PlaceOrder = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shippingAddress = useSelector((state) => state.shippingAddress);
  const paymentType = useSelector((state) => state.paymentType);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="row">
      <div className="col-8">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <h3>Shipping Information</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Address: </strong>
                  {shippingAddress.address}
                </li>
                <li className="list-group-item">
                  <strong>City: </strong>
                  {shippingAddress.city}
                </li>
                <li className="list-group-item">
                  <strong>Postal Code: </strong>
                  {shippingAddress.postal}
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <h3>Payment Information</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Payment Method: </strong>
                  {paymentType.paymentType}
                </li>
                <li className="list-group-item">
                  <strong>Name: </strong>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <strong>Email: </strong>
                  {user.email}
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              {cartItems.length === 0 && (
                <h1 style={{ color: "brown" }}>No items to show!</h1>
              )}
              <ul className="list-group list-group-flush">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <div className="row">
                      <div className="col-2">
                        <img className="img-fluid" src={item.image} alt="" />
                      </div>
                      <div className="col-4">
                        <h6>{item.name}</h6>
                      </div>
                      <div className="col-2">
                        ${item.price} x {item.qty}
                      </div>
                      <div className="col-2">=</div>
                      <div className="col-2">
                        <strong>${item.qty * item.price}</strong>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-4 text-center">
        <ul className="list-group">
          <li className="list-group-item">
            <h3>Total</h3>
          </li>
          <li className="list-group-item">
            {cartItems.map((item) => (
              <div className="row">
                <div className="col-8">
                  {item.qty} x {item.name} for{" "}
                </div>
                <div className="col-4">
                  <strong>${item.price * item.qty}</strong>
                </div>
              </div>
            ))}
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-8">Delivery Charges:</div>
              <div className="col-4">
                <strong>$100</strong>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-8">Total:</div>
              <div className="col-4">
                <strong>
                  ${cartItems.reduce((a, i) => a + i.price * i.qty, 0) + 100}
                </strong>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-grid gap-2">
              <button
                disabled={cartItems.length === 0}
                className="btn btn-dark"
                type="button"
              >
                Place Order
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlaceOrder;
