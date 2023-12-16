import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Home from "../views/home/HomeMain";
import News from "../views/news/NewsMain";

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
          <Route path="/news" element={<News />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
