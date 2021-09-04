import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./screens/Product";
import Home from "./screens/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <div id="main" className="container my-3">
        <Route exact path='/' component={Home} />
        <Route path='/product/:id' component={Product} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
