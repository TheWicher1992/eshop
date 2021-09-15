import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
const OrdersTable = ({ orders }) => {
  return (
    <div className="table-responsive">
      <table className="table m-0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Order ID</th>
            <th>Items</th>
            <th>Delivery Status</th>
            <th>Payment Status</th>
            <th>Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map(order => (
              <tr key={order._id}>
                <td className='small'>{moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
                <td>
                  <Link to='' className='small'>{order._id}</Link>
                </td>
                <td>
                  {
                    order.orderItems.map((item, key) => (
                      <p key={`${key}_${item.name}_${item.qty}`}>{item.qty} x {item.name}</p>
                    ))
                  }
                </td>
                <td>
                  {
                    order.isDelivered ?
                      <span className="badge badge-success">
                        Delivered
                      </span> :
                      <span className="badge badge-danger">
                        Not Delivered
                      </span>
                  }

                </td>
                <td>
                  {
                    order.isPaid ?
                      <span className="badge badge-success">
                        Paid
                      </span> :
                      <span className="badge badge-danger">
                        Not Paid
                      </span>
                  }

                </td>
                <td>
                  <div
                    className="sparkbar"
                    data-color="#00a65a"
                    data-height={20}
                  >
                    {order.totalPrice.toFixed(2)}
                  </div>
                </td>
              </tr>
            ))
          }
          <tr>
            <th>Date</th>
            <th>Order ID</th>
            <th>Items</th>
            <th>Delivery Status</th>
            <th>Payment Status</th>
            <th>Total ($)</th>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default OrdersTable
