import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
function App() {
  return (
    <>
      <Navbar />
      <div id="main" className="container my-3">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
