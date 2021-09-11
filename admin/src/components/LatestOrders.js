import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLatestOrders } from '../actions/dashboardActions'
import OrdersTable from './tables/OrdersTable'
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
        <OrdersTable orders={orders} />
      </div>
      {/* /.card-body */}
      <div className="card-footer clearfix">
        <Link
          to="/orders"
          className="btn btn-sm btn-info btn-secondary float-right"
        >
          View All Orders
        </Link>
      </div>
      {/* /.card-footer */}
    </div>

  )
}

export default LatestOrders
