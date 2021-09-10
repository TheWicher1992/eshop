import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import InfoBoxes from "./components/InfoBoxes";
import ContentHeader from "./components/ContentHeader";
import MonthlyReports from "./components/MonthlyReports";
import VisitorReport from "./components/VisitorReport";
import DirectChat from "./components/DirectChat";
import LatestMembers from "./components/LatestMembers";
import LatestOrders from "./components/LatestOrders";
import InfoBoxesV2 from "./components/InfoBoxesV2";
import BrowserUsage from "./components/BrowserUsage";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
const App = () => {
  return (
    <div className='wrapper'>
      <Preloader />
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <ContentHeader />
        <section className="content">
          <div className="container-fluid">
            <InfoBoxes />
            <MonthlyReports />
            <div className="row">
              <div className="col-md-8">
                <VisitorReport />
                <div className="row">
                  <div className="col-md-6">
                    <DirectChat />
                  </div>
                  <div className="col-md-6">
                    <LatestMembers />
                  </div>
                </div>

                <LatestOrders />
              </div>
              <div className="col-md-4">
                <InfoBoxesV2 />
                <BrowserUsage />
                <ProductList />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
