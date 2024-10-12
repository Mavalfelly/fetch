export default function StarshipCard({ starship }) {
    return (
      <div>
        <h2>{starship.name}</h2>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
      </div>
    );
  }