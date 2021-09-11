import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrder } from '../actions/orderActions'
import axios from 'axios'
const Order = ({ match, history }) => {

  const { loading, error, order } = useSelector(state => state.getOrder)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrder(match.params.id))
  }, [match, dispatch])

  const payOrder = (id) => {
    axios.post(`/api/orders/payment/${id}`).then(() => history.push(`/order/${match.params.id}`)).catch(err => console.log(err))
  }

  return (
    <>
      {!loading && <div className="row">
        <div className="col-8">
          <p className="text-danger">{error}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row">
                <h3>Shipping Information</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Address: </strong>
                    {order.shippingAddress.address}
                  </li>
                  <li className="list-group-item">
                    <strong>City: </strong>
                    {order.shippingAddress.city}
                  </li>
                  <li className="list-group-item">
                    <strong>Postal Code: </strong>
                    {order.shippingAddress.postal}
                  </li>
                  {!order.isDelivered && <li className="list-group-item">
                    <p className="text-danger">This Order is not deivered yet</p>
                  </li>}
                </ul>

              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <h3>Payment Information</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Payment Method: </strong>
                    {order.paymentMethod}
                  </li>
                  {!order.isPaid && <li className="list-group-item">
                    <p className="text-danger">This Order is not paid yet</p>
                  </li>}
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                {order.orderItems.length === 0 && (
                  <h1 style={{ color: "brown" }}>No items to show!</h1>
                )}
                <ul className="list-group list-group-flush">
                  {order.orderItems.map((item) => (
                    <li key={item.name} className="list-group-item">
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
              {order.orderItems.map((item) => (
                <div key={item.name} className="row">
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
                    ${(order.orderItems.reduce((a, i) => a + i.price * i.qty, 0) + 100).toFixed(2)}
                  </strong>
                </div>
              </div>
            </li>
            {!order.isPaid && <li className="list-group-item">
              <div className="d-grid gap-2">
                <button
                  disabled={order.orderItems.length === 0}
                  className="btn btn-dark"
                  type="button"
                  onClick={() => payOrder(order._id)}
                >
                  Pay Now
                </button>
              </div>
            </li>}
          </ul>
        </div>
      </div>}
    </>

  )
}

export default Order
