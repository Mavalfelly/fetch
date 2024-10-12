import { useState, useEffect } from 'react';
import { getAll } from './services/starShipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

function App() {
  const [starships, setStarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAll()
      .then(data => setStarships(data.results))
      .catch(err => console.error('Error loading starships', err));
  }, []);

  const filteredStarships = starships.filter(starship =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <StarshipSearch onSearch={setSearchQuery} />
      <StarshipList starships={filteredStarships} />
    </div>
  );
}

export default App;
