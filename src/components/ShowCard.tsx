import React from 'react';

type ShowPreview = {
  id: string;
  title: string;
  image: string;
  updated: string;
  genres: number[];
};

interface ShowCardProps {
  show: ShowPreview;
}

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  return (
    <div className="show-card">
      <img src={show.image} alt={show.title} />
      <h3>{show.title}</h3>
      <p>Last updated: {new Date(show.updated).toLocaleDateString()}</p>
    </div>
  );
};

export default ShowCard;
