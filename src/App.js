/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import CakeCard from './components/CakeCard';
import { CartProvider } from './contexts/CartContext';
// src/App.js or the specific component file
import './App.css';


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;