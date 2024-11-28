// HomePage.tsx

// HomePage.tsx

import { useState, useEffect } from 'react';
import { fetchPreviews } from '../services/api';

import ShowGrid from '../components/ShowGrid';
import GenreFilter from '../components/GenreFilter';


function HomePage() {
  const [podcasts, setPodcasts] = useState<any[]>([]); // podcast data Array
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [filteredShows, setFilteredShows] = useState<any[]>([]);

  // Callback to update filtered shows
  const handleFilteredShowsChange = (shows: any[]) => {
    setFilteredShows(shows); // Update the filtered shows
    setLoading(false); // Loading complete
  }

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
      <GenreFilter onFilteredShowsChange={handleFilteredShowsChange} />
      {loading ? (
        <p>Loading podcasts...</p>
      ) : (
        <div>
          <ShowGrid shows={podcasts} /> // Pass podcasts data to ShowGrid
          <ShowGrid shows={filteredShows} /> // Pass filtered shows to ShowGrid
        </div>
      )}
    </div>
  );
}

export default HomePage;
