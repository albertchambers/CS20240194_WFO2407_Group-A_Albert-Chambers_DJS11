import React from 'react';

interface GenreFilterProps {
  genres: { id: string; title: string }[];
  selectedGenres: string[];
  onGenreChange: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenres, onGenreChange }) => (
  <div className="genre-filter">
    <label htmlFor="genre">Filter by Genre:</label>
    <select
      id="genre"
      multiple
      value={selectedGenres}
      onChange={(e) => onGenreChange(e.target.value)}
      aria-label="Select genres to filter"
    >
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.title}
        </option>
      ))}
    </select>
  </div>
);

export default GenreFilter;
