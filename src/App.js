import "./App.scss";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import About from "./pages/About";
import Johnny from "./pages/Johnny"
import Shoutouts from "./pages/Shoutouts";
import Youtube from './pages/Youtube'
import MusicPlayer from "./components/MusicPlayer";
import Chat from "./pages/Chat";
import Merch from "./pages/Merch";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/values/" exact element={<Mission />} />
          <Route path="/diamonds/" exact element={<About />} />
          <Route path="/boss/" exact element={<Johnny />} />
          <Route path="/inspirations/" exact element={<Shoutouts />} />
          <Route path="/youtube/" exact element={<Youtube />} />
          <Route path="*" exact element={<Home/>} />
        </Routes> */}
        <Home/>
        <Chat/>
        <Merch/>
        <MusicPlayer/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
