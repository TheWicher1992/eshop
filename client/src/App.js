import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./screens/Product";
import Home from "./screens/Home";
import { ToastContainer } from 'react-toastify';
import Cart from "./screens/Cart";
import 'react-toastify/dist/ReactToastify.css';
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
      </div>
      <Footer />
    </Router>
  );
}

export default App;
