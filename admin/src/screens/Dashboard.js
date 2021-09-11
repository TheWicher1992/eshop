import React from 'react'
import BrowserUsage from '../components/BrowserUsage'
import ContentHeader from '../components/ContentHeader'
import DirectChat from '../components/DirectChat'
import InfoBoxes from '../components/InfoBoxes'
import InfoBoxesV2 from '../components/InfoBoxesV2'
import LatestMembers from '../components/LatestMembers'
import LatestOrders from '../components/LatestOrders'
import MonthlyReports from '../components/MonthlyReports'
import ProductList from '../components/ProductList'
import VisitorReport from '../components/VisitorReport'

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
