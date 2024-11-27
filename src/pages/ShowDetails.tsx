import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Show } from '../interface/types';

// Utility to sanitize URLs
function sanitizeUrl(url: string): string {
  try {
    const sanitizedUrl = new URL(url);

    // Only allow HTTPS protocol and trusted domains
    const trustedDomains = ['podcast-api.netlify.app'];
    if (
      sanitizedUrl.protocol !== 'https:' ||
      !trustedDomains.some((domain) => sanitizedUrl.hostname.endsWith(domain))
    ) {
      console.warn(`Blocked URL: ${url}`);
      return '';
    }

    return sanitizedUrl.href;
  } catch (error) {
    console.warn('Invalid URL:', url, error);
    return ''; // Return an empty string for invalid URLs
  }
}

function ShowDetails() {
  const [show, setShow] = useState<Show | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch show details: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Show) => {
        setShow(data);
      })
      .catch((error) => {
        console.error('Error fetching show details:', error);
      });
  }, [id]);

  return (
    <div className="ShowDetails">
      {show ? (
        <>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
          <img
            src={sanitizeUrl(show.image)}
            alt={show.title}
            className="show-image"
          />
          <div className="seasons">
            {show.seasons && show.seasons.length > 0 ? (
              show.seasons.map((season) => (
                <div key={season.number} className="season">
                  <h2>{season.title}</h2>
                  <img
                    src={sanitizeUrl(season.image)}
                    alt={season.title}
                    className="season-image"
                  />
                  <div className="episodes">
                    {season.episodes && season.episodes.length > 0 ? (
                      season.episodes.map((episode) => (
                        <div key={episode.id} className="episode">
                          <h3>
                            Episode {episode.id}: {episode.title}
                          </h3>
                          <p>{episode.description}</p>
                          <audio controls>
                            <source
                              src={sanitizeUrl(episode.audioSrc)}
                              type="audio/mpeg"
                            />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      ))
                    ) : (
                      <p>No episodes available for this season.</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No seasons available for this show.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading show details...</p>
      )}
    </div>
  );
}

export default ShowDetails;
