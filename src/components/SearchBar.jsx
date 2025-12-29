import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    placeholder="Search books..."
    value={searchQuery}
    onChange={e => setSearchQuery(e.target.value)}
  />
);

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;