const BASE_URL = 'https://podcast-api.netlify.app';

const fetchApi = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

export const fetchPreviews = async () => fetchApi('shows');

export const fetchShow = async (showId: string) => {
  const data = await fetchApi(`id/${showId}`);
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    image: data.image,
    seasons: data.seasons.map((season: any, seasonIndex: number) => ({
      number: seasonIndex + 1,
      title: season.title,
      image: season.image,
      episodes: season.episodes.map((episode: any, episodeIndex: number) => ({
        id: episodeIndex + 1,
        title: episode.title,
        description: episode.description,
        duration: episode.duration,
        audioSrc: episode.file,
      })),
    })),
  };
};
