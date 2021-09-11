import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import OrdersTable from './tables/OrdersTable'
const AllOrders = () => {
  const { orders, loading, error } = useSelector(state => state.orders)
  return (
    <div className="card">
      <div className="card-header border-transparent">
        <h3 className="card-title">Latest Orders</h3>
        <div className="card-tools">
          <Link
            to="/orders"
            className="btn btn-sm btn-info btn-secondary float-right"
          >
            Refresh
          </Link>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <OrdersTable orders={orders} />
      </div>
      {/* /.card-body */}
      <div className="card-footer clearfix">
      </div>
      {/* /.card-footer */}
    </div>

  )
}

export default AllOrders
