import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStats } from '../actions/dashboardActions'
const InfoBoxes = () => {
  const { stats } = useSelector(state => state.dashboardStats)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStats())
  }, [dispatch])
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box">
          <span className="info-box-icon bg-info elevation-1"><i className="fas fa-dollar-sign" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Total Revenue</span>
            <span className="info-box-number">
              <small>$</small>
              {stats.totalRevenue}
            </span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
      </div>
      {/* /.col */}
      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-hourglass-end" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Products Out Of Stock</span>
            <span className="info-box-number">{stats.outOfStockProducts}</span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
      </div>
      {/* /.col */}
      {/* fix for small devices only */}
      <div className="clearfix hidden-md-up" />
      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Sales</span>
            <span className="info-box-number">{stats.totalSales}</span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
      </div>
      {/* /.col */}
      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Customers</span>
            <span className="info-box-number">{stats.totalCustomers}</span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
      </div>
      {/* /.col */}
    </div>

  )
}

export default InfoBoxes
