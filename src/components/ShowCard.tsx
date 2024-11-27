// ShowCard.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import AudioPlayer from './AudioPlayer'; // Assuming AudioPlayer is inside components

type ShowPreview = {
  id: string;
  title: string;
  image: string;
  updated: string;
  genres: string[];
  description: string;
};

interface ShowCardProps {
  show: ShowPreview;
}

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  return (
    <div className="podcast-card">
      <img src={show.image} alt={show.title} className="podcast-image" />
      <div className="podcast-info">
        <h3 className="podcast-title">
          {/* Link to the individual show page */}
          <Link to={`/show/${show.id}`} className="podcast-title">
            {show.title}
          </Link>
        </h3>
      </div>
      {/* AudioPlayer component wrapped within the same card */}
      <AudioPlayer
        trackUrl="https://example.com/sample.mp3" // This can be dynamic based on the podcast
        title={show.title}
        artist={show.title} // Can be changed based on the show information
      />
    </div>
  );
};

export default ShowCard;
