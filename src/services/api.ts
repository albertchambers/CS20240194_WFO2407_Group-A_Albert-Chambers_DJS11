interface Episode {
  id: number;
  title: string;
  description: string;
  duration: number;
  audioSrc: string;
}

interface Season {
  number: number;
  title: string;
  image: string;
  episodes: Episode[];
}

interface Show {
  id: string;
  title: string;
  description: string;
  image: string;
  seasons: Season[];
}

// Type definitions for raw API responses
interface RawEpisode {
  title: string;
  description: string;
  duration: number;
  file: string;
}

interface RawSeason {
  title: string;
  image: string;
  episodes: RawEpisode[];
}

interface RawShow {
  id: string;
  title: string;
  description: string;
  image: string;
  seasons: RawSeason[];
}

// Base URL for the Podcast API
const BASE_URL = 'https://podcast-api.netlify.app';

/**
 * Fetches data from the specified API endpoint.
 *
 * @param endpoint - The API endpoint to fetch data from.
 * @returns Parsed JSON response.
 * @throws Will throw an error if the response is not successful.
 */
const fetchApi = async <T>(endpoint: string): Promise<T> => {
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

/**
 * Fetches a list of podcast previews.
 *
 * @returns A promise resolving to the list of podcast previews.
 */
export const fetchPreviews = async (): Promise<Show[]> => {
  const previews: RawShow[] = await fetchApi<RawShow[]>('shows');
  return previews.map((preview): Show => ({
    id: preview.id,
    title: preview.title,
    description: preview.description,
    image: preview.image,
    seasons: [], // Assuming previews don't include seasons; update if needed.
  }));
};

/**
 * Fetches details for a specific podcast show.
 *
 * @param showId - The unique identifier for the podcast show.
 * @returns A promise resolving to the detailed show object.
 */
export const fetchShow = async (showId: string): Promise<Show> => {
  const data: RawShow = await fetchApi<RawShow>(`id/${showId}`);
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    image: data.image,
    seasons: data.seasons.map((season, seasonIndex): Season => ({
      number: seasonIndex + 1,
      title: season.title,
      image: season.image,
      episodes: season.episodes.map((episode, episodeIndex): Episode => ({
        id: episodeIndex + 1,
        title: episode.title,
        description: episode.description,
        duration: episode.duration,
        audioSrc: episode.file,
      })),
    })),
  };
};
