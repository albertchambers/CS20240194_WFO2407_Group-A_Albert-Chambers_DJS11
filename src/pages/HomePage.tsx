import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AudioPlayer from '../components/AudioPlayer';

function About() {
  const [podcasts, setPodcasts] = useState<any[]>([]); // Type added for clarity, replace 'any' with a more specific type

  useEffect(() => {
    fetch('https://podcast-api.netlify.app')
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data);
      })
      .catch((error) => {
        console.error('Error fetching podcast data:', error);
      });
  }, []);

  return (
    <div className="HomePage">
      <h1>About</h1>
      {podcasts.length > 0 ? (
        <div className="podcast-grid">
          {podcasts.map((podcast, index) => (
            <div key={index} className="podcast-card">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="podcast-image"
              />
              <p>
                <Link to={`/show/${podcast.id}`} className="podcast-title">
                  {podcast.title}
                </Link>
              </p>
              {/* Wrap the AudioPlayer in the same div */}
              <AudioPlayer
                trackUrl="https://example.com/sample.mp3"
                title="Sample Podcast"
                artist="Podcast Artist"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading podcast titles...</p>
      )}
    </div>
  );
}

export default About;
