import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About'
import './index.css';
import Nav from './assets/header';
import Footer from './assets/footer';
import Nomad from './pages/Nomad';
import Promaj from './pages/Promaj';
import Zanat from './pages/Zanat';

function App() {
  return (
    
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects/nomad" element={<Nomad />}/>
        <Route path="/projects/promaja" element={<Promaj />}/>
        <Route path="/projects/zanat" element={<Zanat />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
