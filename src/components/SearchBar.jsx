import React from 'react';
import { Input } from './ui/Input';

const SearchBar = ({ onSearch }) => (
  <div className="p-4">
    <Input placeholder="Search books..." onChange={(e) => onSearch(e.target.value)} />
  </div>
);

export default SearchBar;