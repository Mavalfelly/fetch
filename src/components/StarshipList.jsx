import StarshipCard from './StarshipCard';

export default function StarshipList({ starships }) {
  return (
    <div>
      {starships.length > 0 ? (
        starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}