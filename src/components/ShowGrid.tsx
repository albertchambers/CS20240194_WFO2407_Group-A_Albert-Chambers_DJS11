import React from 'react';
import ShowCard from './ShowCard';

type ShowPreview = {
  id: string;
  title: string;
  image: string;
  updated: string;
  genres: string[];
  description: string;
};

interface ShowGridProps {
  shows: ShowPreview[];
}

const ShowGrid: React.FC<ShowGridProps> = ({ shows }) => {
  return (
    <div className="podcast-grid">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowGrid;
