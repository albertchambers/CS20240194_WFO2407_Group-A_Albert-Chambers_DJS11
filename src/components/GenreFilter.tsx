import React from 'react';

interface GenreFilterProps {
  genres: { id: string; title: string }[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="genre-filter">
      <label htmlFor="genre">Filter by Genre:</label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;