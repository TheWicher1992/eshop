import React from 'react'

const OrdersTable = ({ orders }) => {
  return (
    <div className="table-responsive">
      <table className="table m-0">
        <thead>
          <tr>
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
                <td>
                  <a href="#">{order._id}</a>
                </td>
                <td>
                  {
                    order.orderItems.map(item => (
                      <p key={item.name}>{item.qty} x {item.name}</p>
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
        </tbody>
      </table>
    </div>

  )
}

export default OrdersTable
