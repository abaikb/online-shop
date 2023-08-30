import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Импортируйте CartProvider
import { FavoriteProvider } from './FavoriteContext';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/catalogPage/bag';
import BagDetailPage from './pages/DetailPage/detail.jsx'; // Импортируйте компонент BagDetailPage
import CartPage from './pages/CartPage';
import Favorite from './pages/FavoritePage/fav.jsx';
import LoginPage from './pages/LoginPage/LoginPage';
;

function App() {
  return (
    <Router>
      <CartProvider>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/favorites" element={<Favorite />} />
              <Route path="/profile" element={<LoginPage />} />
              <Route path="/catalog/:id" element={<BagDetailPage />} />

              {/* Добавьте другие маршруты здесь */}
            </Route>
          </Routes>
        </FavoriteProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
