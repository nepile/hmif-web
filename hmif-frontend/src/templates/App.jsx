import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/HomeMain";
import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "../components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1900, once: true });
  }, []);
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
