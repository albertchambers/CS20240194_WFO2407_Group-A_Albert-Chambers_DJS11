// HomePage.tsx (or About.tsx)
import { useState, useEffect } from 'react';
import { fetchPreviews } from '../services/api'; // Import the fetchPreviews function

import ShowGrid from '../components/ShowGrid'; // Import ShowGrid component

function HomePage() {
  const [podcasts, setPodcasts] = useState<any[]>([]); // Array to hold podcast data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    // Fetch podcast previews from the API
    fetchPreviews()
      .then((data) => {
        setPodcasts(data); // Store podcasts data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching podcasts:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div className="HomePage">
      <h1>About</h1>
      {loading ? (
        <p>Loading podcasts...</p> // Show loading message
      ) : (
        <ShowGrid shows={podcasts} /> // Pass podcasts data to ShowGrid
      )}
    </div>
  );
}

export default HomePage;
