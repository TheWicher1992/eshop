import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLatestOrders } from '../actions/dashboardActions'
const LatestOrders = () => {
  const { orders } = useSelector(state => state.dashboardLatestOrders)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLatestOrders())
  }, [dispatch])
  return (
    <div className="card">
      <div className="card-header border-transparent">
        <h3 className="card-title">Latest Orders</h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus" />
          </button>
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="remove"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
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
        {/* /.table-responsive */}
      </div>
      {/* /.card-body */}
      <div className="card-footer clearfix">
        <a
          href="#"
          className="btn btn-sm btn-info btn-secondary float-right"
        >
          View All Orders
        </a>
      </div>
      {/* /.card-footer */}
    </div>

  )
}

export default LatestOrders
