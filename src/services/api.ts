const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error('Failed to fetch shows');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchShowById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/id/${id}`);
    if (!response.ok) throw new Error('Failed to fetch show details');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchGenreById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/genre/${id}`);
    if (!response.ok) throw new Error('Failed to fetch genre');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};