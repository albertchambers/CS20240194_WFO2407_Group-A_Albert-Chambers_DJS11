import React from 'react';
import { Link } from 'react-router-dom';

import AudioPlayer from './AudioPlayer';
import { ShowCardProps } from '../interface/types';

import genreMap from '../json/genreMap.json';
import { GenreMap } from '../interface/types';


// Ensure genreMap matches the expected structure
const typedGenreMap: GenreMap = genreMap;

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  // Handle genre resolution safely
  const genre = typedGenreMap[show.genres?.toString() || ''] || 'Unknown';

  return (
    <div className="podcast-card-container">
      <Link to={`/show/${show.id}`} className="podcast-link">
        <div className="podcast-card">
          <img src={show.image} alt={show.title} className="podcast-image" />
          <p>Genre: {genre}</p>
          <AudioPlayer
            trackUrl="https://example.com/sample.mp3" // Replace with dynamic
            title={show.title}
            artist={show.title}
          />
        </div>
      </Link>
    </div>
  );
};

export default ShowCard;
