import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./screens/Product";
import Home from "./screens/Home";
import { ToastContainer } from 'react-toastify';
import Cart from "./screens/Cart";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Shipping from "./screens/Shipping";
import Payment from "./screens/Payment";
import PlaceOrder from "./screens/PlaceOrder";
import Order from "./screens/Order";
function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div id="main" className="container my-3">
        <Route exact path='/' component={Home} />
        <Route path='/product/:id' component={Product} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/shipping' component={Shipping} />
        <Route exact path='/payment' component={Payment} />
        <Route exact path='/place-order' component={PlaceOrder} />
        <Route exact path='/order/:id' component={Order} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
