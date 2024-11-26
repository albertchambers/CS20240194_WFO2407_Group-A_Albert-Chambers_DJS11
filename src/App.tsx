import './styles/App.scss';

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShowGrid from './components/ShowGrid';
import { fetchShows } from './services/api';

import viteLogo from '/vite.svg';

const App: React.FC = () => {
  const [shows, setShows] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadShows = async () => {
      try {
        const fetchedShows = await fetchShows();
        setShows(fetchedShows);
      } catch (err) {
        setError('Failed to load shows. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadShows();
  }, []);

  return (
    <div className="app-container">
      {/* Vite Logo */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      {/* App Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Additional Routes Can Be Added Here */}
      </Routes>

      {/* ShowGrid */}
      <div className="show-container">
        <h1>Podcast Library</h1>
        {loading && <p>Loading shows...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <ShowGrid shows={shows} />}
      </div>
    </div>
  );
};

export default App;
