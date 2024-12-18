// ShowGrid.tsx
import React from 'react';
import ShowCard from './ShowCard'; // Import the ShowCard component
import { ShowGridProps } from '../interface/types'

const ShowGrid: React.FC<ShowGridProps> = ({ shows }) => {
  return (
    <div className="podcast-grid">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} /> // Render ShowCard for each show
      ))}
    </div>
  );
};

export default ShowGrid;
