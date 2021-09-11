import React from 'react'
import AllOrders from '../components/AllOrders'
import ContentHeader from '../components/ContentHeader'
import InfoBox from '../components/InfoBox'


const Orders = () => {
  return (
    <>
      <ContentHeader heading='All Orders' />
      <section className="content">
        <div className="container-fluid">
          {/* info boxes */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4">
              <InfoBox variant='danger' value='0' title='Undelivered Orders' icon='fas fa-times' />
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <InfoBox variant='warning' value='0' title='Unpaid Orders' icon='fas fa-money-check-alt' />
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <InfoBox variant='info' value='0' title='Orders in last 24 hours' icon='fas fa-clock' />
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
