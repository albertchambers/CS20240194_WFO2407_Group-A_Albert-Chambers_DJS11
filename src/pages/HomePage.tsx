import React, { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import ShowCard from '../components/ShowCard';

const HomePage: React.FC = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadShows = async () => {
      try {
        const data = await fetchShows();
        setShows(data.sort((a, b) => a.title.localeCompare(b.title)));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadShows();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="homepage">
      {shows.map(show => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default HomePage;
