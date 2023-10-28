import { BrowserRouter as Router, Route,Link, Switch, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./component/Navbar";

import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />

      </Routes>
      <Footer/>

    </BrowserRouter>
  </div>
  );
}

export default App;
