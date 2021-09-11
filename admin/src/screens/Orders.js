import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderStats } from '../actions/orderActions'
import AllOrders from '../components/AllOrders'
import ContentHeader from '../components/ContentHeader'
import InfoBox from '../components/InfoBox'


const Orders = ({ history }) => {

  const dispatch = useDispatch()
  const { stats } = useSelector(state => state.orderStats)

  useEffect(() => {
    dispatch(getOrderStats())
  }, [dispatch])
  return (
    <>
      <ContentHeader heading='All Orders' />
      <section className="content">
        <div className="container-fluid">
          {/* info boxes */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4">
              <InfoBox variant='danger' value={stats.undeliveredOrders} title='Undelivered Orders' icon='fas fa-times' />
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <InfoBox variant='warning' value={stats.unpaidOrders} title='Unpaid Orders' icon='fas fa-money-check-alt' />
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <InfoBox variant='info' value={stats.last24HoursOrders} title='Orders in last 24 hours' icon='fas fa-clock' />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <AllOrders />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Orders
