import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';
import { ShowCardProps } from '../interface/types'

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  return (
    <div className="podcast-card-container">

      <Link to={`/show/${show.id}`} className="podcast-link">
        <div className="podcast-card">
          <img src={show.image} alt={show.title} className="podcast-image" />
        </div>
      </Link>

      {/* AudioPlayer is outside the Link, so it won't block the click event */}
      <AudioPlayer
        trackUrl="https://example.com/sample.mp3" // This can be dynamic
        title={show.title}
        artist={show.title}
      />
    </div>
  );
};

export default ShowCard;
