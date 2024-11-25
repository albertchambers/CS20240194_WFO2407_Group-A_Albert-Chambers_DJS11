const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) throw new Error('Failed to fetch shows');
  return response.json();
};

export const fetchShowById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/id/${id}`);
  if (!response.ok) throw new Error('Failed to fetch show details');
  return response.json();
};

export const fetchGenreById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/genre/${id}`);
  if (!response.ok) throw new Error('Failed to fetch genre');
  return response.json();
};
