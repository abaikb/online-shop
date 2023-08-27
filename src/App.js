import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Импортируйте CartProvider

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/catalogPage/bag';
import BagDetailPage from './pages/DetailPage/detail.jsx'; // Импортируйте компонент BagDetailPage
import './App.css';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog/:id" element={<BagDetailPage />} /> Добавьте маршрут для детальной страницы
            {/* Добавьте другие маршруты здесь */}
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
