import "./App.scss";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/UUu" exact element={<Home />} />
          <Route path="/mission" exact element={<Mission />} />
          <Route path="/about" exact element={<About />} />
          <Route path="*" exact element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
