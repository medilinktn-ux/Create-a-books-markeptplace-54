import React from 'react';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

const SearchFilter = ({ onSearch, onFilter }) => (
  <div className="p-4 bg-white rounded shadow space-y-4">
    <div>
      <Label>Search</Label>
      <Input placeholder="Search books..." onChange={(e) => onSearch(e.target.value)} />
    </div>
    <div>
      <Label>Genre</Label>
      <Badge>Fiction</Badge>
      <Badge>Classic</Badge>
      <Badge>Dystopian</Badge>
    </div>
    <Button onClick={onFilter}>Apply Filters</Button>
  </div>
);

export default SearchFilter;