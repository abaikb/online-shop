import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import { FavoriteProvider } from './context/FavoriteContext';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/catalogPage/CatalogPage';
import DetailPage from './pages/DetailPage/DetailPage';
import CartPage from './pages/CartPage/CartPage.jsx';
import Favorite from './pages/FavoritePage/fav.jsx';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import './assets/styles/globals.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <FavoriteProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='/catalog' element={<CatalogPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/favorites' element={<Favorite />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/profile' element={<ProfilePage />} /> 
              <Route path='/catalog/:id' element={<DetailPage />} />
              <Route path='/client' element={<ProfilePage />} />
            </Route>
          </Routes>
        </FavoriteProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
