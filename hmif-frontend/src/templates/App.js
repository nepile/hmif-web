import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/Main";
import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";

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
      </div>
    </Router>
  );
}

export default App;
