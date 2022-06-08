import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Home from './pages/Home';
import Mission from "./pages/Mission"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" exact element = {<Home/>}/>
          <Route path = "/mission" exact element = {<Mission/>}/>
          <Route path = "/about" exact element = {<About/>}/>
          <Route path = "/contact" exact element = {<Contact/>}/>
        </Routes> 
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
