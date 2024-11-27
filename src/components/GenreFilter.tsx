import React from 'react';

interface GenreFilterProps {
  genres: { id: string; title: string }[];  // Genre data passed as a prop
  selectedGenres: string[];
  onGenreChange: (genre: string) => void;
}

const genreMap: { [key: string]: string } = {
  '1': 'Personal Growth',
  '2': 'Investigative Journalism',
  '3': 'History',
  '4': 'Comedy',
  '5': 'Entertainment',
  '6': 'Business',
  '7': 'Fiction',
  '8': 'News',
  '9': 'Kids and Family',
};

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
          {genreMap[genre.id] || genre.title}  {/* Use the genreMap to display the title */}
        </option>
      ))}
    </select>
  </div>
);

export default GenreFilter;
