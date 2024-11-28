// src/types/interfaces.ts

export interface Episode {
  id: number;
  title: string;
  description: string;
  duration: number;
  audioSrc: string;
  file?: string;
}

export interface Season {
  number: number;
  title: string;
  image: string;
  episodes: Episode[];
}

export interface Show {
  id: string;
  title: string;
  description: string;
  image: string;
  genre: string | number;
  seasons: Season[];
}

type ShowPreview = {
  id: string;
  title: string;
  image: string;
  updated: string;
  genres: string[] | number;
  description: string;
};

export interface ShowCardProps {
  show: ShowPreview;
}

export interface ShowGridProps {
  shows: ShowPreview[];
}

export interface AudioPlayerProps {
  trackUrl: string;
  title: string;
  artist: string;
  src?: string;
}

export interface PodcastPreview {
  id: string;
  title: string;
  description: string;
  image: string; // URL to the podcast's image
}

export interface GenreFilterProps {
  onFilteredShowsChange: (shows: any[]) => void; // Callback to update filtered shows
}