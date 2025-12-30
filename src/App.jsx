import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import BookDetails from './pages/BookDetails';
import Header from './components/Header';

function App() {
  return (
    <BookProvider>
      <CartProvider>
        <Router basename="/Create-a-books-markeptplace-54">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </Router>
      </CartProvider>
    </BookProvider>
  );
}

export default App;