import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import BookDetails from './pages/BookDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import SellBook from './pages/SellBook';
import Profile from './pages/Profile';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <CartProvider>
          <Router basename="/Create-a-books-markeptplace-54">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sell" element={<SellBook />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </CartProvider>
      </BookProvider>
    </AuthProvider>
  );
}

export default App;