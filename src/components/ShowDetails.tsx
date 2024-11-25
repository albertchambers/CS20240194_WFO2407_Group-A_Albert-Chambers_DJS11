import { useEffect, useState } from 'react';

const ShowDetails = ({ showId, onBack }) => {
  const [showDetails, setShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/id/${showId}`);
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error('Failed to fetch show details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [showId]);

  if (loading) return <p>Loading show details...</p>;

  if (!showDetails) return <p>Show details could not be loaded.</p>;

  return (
    <div className="show-details">
      <button onClick={onBack}>Back</button>
      <h2>{showDetails.title}</h2>
      <p>{showDetails.description}</p>
      <h3>Seasons:</h3>
      <ul>
        {showDetails.seasons.map((season, index) => (
          <li key={index}>{season.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDetails
