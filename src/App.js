import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/catalogPage/bag';
import './App.css';
<<<<<<< HEAD
import Header from './components/header/header.jsx';
=======
import CartPage from './pages/CartPage';
>>>>>>> d2fe550f91915740b6edc31f3451bdff40430dd9

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Добавьте другие маршруты */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
