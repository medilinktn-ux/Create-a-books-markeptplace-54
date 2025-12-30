import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookDetails from './pages/BookDetails';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import SellBook from './pages/SellBook';
import Profile from './pages/Profile';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { BookProvider } from './context/BookContext';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BookProvider>
          <Router basename="/Create-a-books-markeptplace-54">
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/book/:id" element={<BookDetails />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/sell" element={<SellBook />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
            </div>
          </Router>
        </BookProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;