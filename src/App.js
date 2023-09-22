import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import { FavoriteProvider } from './context/FavoriteContext';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/catalogPage/bag';
import BagDetailPage from './pages/DetailPage/detail.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import Favorite from './pages/FavoritePage/fav.jsx';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import './assets/styles/globals.css';

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
              <Route path="/catalog/:id" element={<BagDetailPage />} />
              <Route path="/client" element={<ProfilePage />} />
            </Route>
          </Routes>
        </FavoriteProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
