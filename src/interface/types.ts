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
  seasons: Season[];
}
