import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowDetails() {
  // State to store the podcast details
  const [show, setShow] = useState(null);
  const { id } = useParams(); // Get the 'id' from the URL params

  // Fetch the podcast details based on the ID
  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data); // Store the podcast details in the state
      })
      .catch((error) => {
        console.error('Error fetching show details:', error);
      });
  }, [id]); // Run the effect whenever the 'id' changes

  return (
    <div className="ShowDetails">
      {show ? (
        <>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
          <img src={show.image} alt={show.title} className="show-image" />

          {/* Display seasons and episodes */}
          <div className="seasons">
            {show.seasons && show.seasons.length > 0 ? (
              show.seasons.map((season) => (
                <div key={season.season} className="season">
                  <h2>{season.title}</h2>
                  <img
                    src={season.image}
                    alt={season.title}
                    className="season-image"
                  />
                  <div className="episodes">
                    {season.episodes && season.episodes.length > 0 ? (
                      season.episodes.map((episode) => (
                        <div key={episode.episode} className="episode">
                          <h3>
                            Episode {episode.episode}: {episode.title}
                          </h3>
                          <p>{episode.description}</p>
                          <audio controls>
                            <source src={episode.file} type="audio/mpeg" />
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