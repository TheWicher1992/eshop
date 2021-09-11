import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/Preloader";
import Dashboard from "./screens/Dashboard";
import Orders from "./screens/Orders";
const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <Preloader />
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/orders' component={Orders} />

        </div>
      </div>
    </Router>
  );
};

export default App;
