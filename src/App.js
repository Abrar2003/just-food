import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-0 m-5">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
