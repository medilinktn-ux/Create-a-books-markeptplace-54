import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <h1>My Bookstore</h1>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <a href="/login">Login</a>
      )}
    </header>
  );
};

export default Header;