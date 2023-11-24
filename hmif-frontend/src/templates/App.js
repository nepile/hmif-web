// Import necessary components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/Main";
import Header from "../components/Header";

function App() {
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
