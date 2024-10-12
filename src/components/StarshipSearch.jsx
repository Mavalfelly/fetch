import { useState } from 'react';

export default function StarshipSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);  
  };

  return (
    <input
      type="text"
      placeholder="Search Starships..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}