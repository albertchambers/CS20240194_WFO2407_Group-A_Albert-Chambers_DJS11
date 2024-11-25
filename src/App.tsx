import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import viteLogo from '/vite.svg'
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
      
    </>
  )
}

export default App
