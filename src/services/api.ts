import { Show, Season, Episode } from '../interface/types'; // Adjust the path as needed

export const fetchShowDetails = async (id: string): Promise<Show> => {
  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch show details: ${response.status}`);
  }
  return response.json();
};


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
  const previews: Show[] = await fetchApi<Show[]>('shows');
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
  const data: Show = await fetchApi<Show>(`id/${showId}`);
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    image: data.image,
    seasons: data.seasons.map((season): Season => ({
      number: season.number, // Use the raw value or adjust mapping as needed
      title: season.title,
      image: season.image,
      episodes: season.episodes.map((episode): Episode => ({
        id: episode.id, // Use API response ID if available
        title: episode.title,
        description: episode.description,
        duration: episode.duration,
        audioSrc: episode.file || '', // Map `file` to `audioSrc`, provide fallback
      })),
    })),
  };
};

