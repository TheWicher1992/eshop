import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/Preloader";
import Dashboard from "./screens/Dashboard";
const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <Preloader />
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <Route exact path='/' component={Dashboard} />
        </div>
      </div>
    </Router>
  );
};

export default App;
