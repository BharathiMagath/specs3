// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EyeglassProduct from './components/EyeglassProduct';
import SunglassProduct from './components/SunglassProduct';
import ReadingGlassesProduct from './components/ReadingglassProduct';
import ContactLensesProduct from './components/ContactlensProduct';
import AccessoriesProduct from './components/AccessoriesProduct';
import ComputerglassProduct from './components/ComputerglassProduct';
import ServicePage from './components/ServicePage';
import Location from './components/Location';

import Cart from './contexts/Cart';
import { StoreProvider } from './contexts/StoreContext';
import {Wishlist} from './contexts/Wishlist';
import './App.css'; // Import global styles

const App = () => (
  <Router>
    <div className="App">
    <StoreProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eyeglass-product" element={<EyeglassProduct />} />
        <Route path="/sunglass-product" element={<SunglassProduct />} />
        <Route path="/reading-glasses-product" element={<ReadingGlassesProduct />} />
        <Route path="/contact-lenses-product" element={<ContactLensesProduct />} />
        <Route path="/accessories-product" element={<AccessoriesProduct />} />
        <Route path="/computer-glasses-product" element={<ComputerglassProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/location" element={<Location />} />
         

          <Route path="/service" element={<ServicePage />} />
      </Routes>
      </StoreProvider>
    </div>
  </Router>
);

export default App;
