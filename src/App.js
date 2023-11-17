import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'
import { FavoriteProvider } from './context/FavoriteContext'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage/HomePage'
import CatalogPage from './pages/catalogPage/CatalogPage'
import DetailPage from './pages/DetailPage/DetailPage'
import CartPage from './pages/CartPage/CartPage.jsx'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Profile from './pages/Profile/Profile'
import RegisterPage from './pages/RegisterPage/RegisterPage'

import './assets/styles/globals.scss'
import EditProfile from './pages/EditProfile/EditProfile'

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
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/catalog/:category/:id" element={<DetailPage />} />
            </Route>
          </Routes>
        </FavoriteProvider>
      </CartProvider>
    </Router>
  )
}

export default App
