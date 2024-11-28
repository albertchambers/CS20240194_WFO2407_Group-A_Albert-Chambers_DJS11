// HomePage.tsx

import { useState, useEffect } from 'react';
import { fetchPreviews } from '../services/api';
import ShowGrid from '../components/ShowGrid';

function HomePage() {
  const [podcasts, setPodcasts] = useState<any[]>([]); // Array to hold podcast data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    fetchPreviews()
      .then((data) => {
        setPodcasts(data); // Store podcasts data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching podcasts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="HomePage">
      <h1>About</h1>
      {loading ? (
        <p>Loading podcasts...</p>
      ) : (
        <ShowGrid shows={podcasts} /> // Pass podcasts data to ShowGrid
      )}
    </div>
  );
}

export default HomePage;
