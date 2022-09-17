import "./App.scss";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import About from "./pages/About";
import Johnny from "./pages/Johnny"
import Shoutouts from "./pages/Shoutouts";
import Youtube from './pages/Youtube'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <iframe className="musicplayer" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1338404152&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
      </Router>
    </div>
  );
}

export default App;
