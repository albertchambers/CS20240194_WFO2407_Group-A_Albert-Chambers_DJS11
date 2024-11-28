import React, { useEffect, useState } from 'react';
import { fetchPreviews } from '../services/api'; // Import the API call
import genreMap from '../json/genreMap.json';
import { GenreMap, GenreFilterProps } from '../interface/types';

const GenreFilter: React.FC<GenreFilterProps> = ({ onFilteredShowsChange }) => {
  const [genres, setGenres] = useState<{ id: string; title: string }[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>(''); 
  const [allShows, setAllShows] = useState<any[]>([]);

  useEffect(() => {
    fetchPreviews()
      .then((data) => {
        setAllShows(data);
        // Type assertion: genreMap is of type GenreMap
        setGenres(Object.keys(genreMap).map((key) => ({
          id: key,
          title: genreMap[key as keyof GenreMap] // Ensure the correct key type for genreMap
        })));
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  useEffect(() => {
    if (!selectedGenre) {
      onFilteredShowsChange(allShows);
    } else {
      const filteredShows = allShows.filter((show) => show.genre === selectedGenre);
      onFilteredShowsChange(filteredShows);
    }
  }, [selectedGenre, allShows, onFilteredShowsChange]);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div className="genre-filter">
      <label htmlFor="genre">Filter by Genre:</label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={handleGenreChange}
        aria-label="Select genre to filter"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
