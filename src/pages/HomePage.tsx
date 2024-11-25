import React, { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import ShowCard from '../components/ShowCard';
import GenreFilter from '../components/GenreFilter';
import AudioPlayer from '../components/AudioPlayer';

const HomePage: React.FC = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  useEffect(() => {
    const loadShows = async () => {
      try {
        const data = await fetchShows();
        setShows(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadShows();
  }, []);

  const filteredShows = selectedGenre
    ? shows.filter(show => show.genres.includes(Number(selectedGenre)))
    : shows;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="homepage">
      <GenreFilter
        genres={[{ id: '1', title: 'Genre 1' }, { id: '2', title: 'Genre 2' }]}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      <AudioPlayer
        trackUrl="https://example.com/sample.mp3"
        title="Sample Podcast"
        artist="Podcast Artist"
      />
      <div className="show-list">
        {filteredShows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;