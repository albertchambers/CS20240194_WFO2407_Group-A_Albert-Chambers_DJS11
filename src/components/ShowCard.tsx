import React from 'react';

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
        <h3 className="podcast-title">{show.title}</h3>
        <p className="podcast-description">{show.description}</p>
        <p className="podcast-genre">{show.genres.join(', ')}</p>
      </div>
      <div className="hovercard">
        <h3 className="hover-title">{show.title}</h3>
        <p className="hover-description">Updated: {new Date(show.updated).toLocaleDateString()}</p>
        <p className="hover-description">Genres: {show.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default ShowCard;
