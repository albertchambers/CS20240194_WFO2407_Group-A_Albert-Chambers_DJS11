import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShowDetails = lazy(() => import('./pages/ShowDetails'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
