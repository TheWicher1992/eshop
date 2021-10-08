import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/Preloader";
import Dashboard from "./screens/Dashboard";
import Orders from "./screens/Orders";
import Login from "./screens/Login";

const DefaultLayout = () => (
  <div className='wrapper'>
    <Preloader />
    <Navbar />
    <Sidebar />
    <div className="content-wrapper">
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/orders' component={Orders} />
      <Route exact path="/login" component={Login} />
    </div>
  </div>
)

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route component={DefaultLayout} />
      </Switch>

    </Router>
  );
};

export default App;
