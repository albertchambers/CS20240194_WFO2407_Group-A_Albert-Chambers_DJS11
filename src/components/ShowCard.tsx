import React, { memo } from 'react';

type ShowPreview = {
  id: string;
  title: string;
  image: string;
  updated: string;
  genres: string[];
  description: string;
};

const ShowCard: React.FC<{ show: ShowPreview }> = ({ show }) => (
  <div className="podcast-card">
    <img src={show.image} alt={show.title} className="podcast-image" loading="lazy" />
    <div className="podcast-info">
      <h3>{show.title}</h3>
      <p>{show.description}</p>
    </div>
  </div>
);

export default memo(ShowCard);
