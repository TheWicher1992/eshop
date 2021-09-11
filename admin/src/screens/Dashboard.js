import React from 'react'
import ContentHeader from '../components/ContentHeader'
import InfoBoxes from '../components/InfoBoxes'
import LatestOrders from '../components/LatestOrders'
import ProductList from '../components/ProductList'

const Dashboard = () => {
  return (
    <>
      <ContentHeader heading='Eshop AdminLTE Dash' />
      <section className="content">
        <div className="container-fluid">
          <InfoBoxes />
          <div className="row">
            <div className="col-md-12">
              <LatestOrders />
            </div>
            <div className="col-md-12">
              <ProductList />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
