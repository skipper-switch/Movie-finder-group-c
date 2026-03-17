import type { LucideIcon } from "lucide-react";

export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  trailer?: boolean;
};

export type MovieProps = {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  trailer?: boolean;
};

export interface Genre {
  id: number;
  name: string;
}
export interface MovieDetails {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  genres: Genre[];
  revenue: number;
  budget: number;
  vote_count: number;
  credits: CreditsResponse;
}

export interface DetailsItem {
  header: string;
  text: string;
  icon?: LucideIcon;
}
export interface MovieDetailsCard {
  bg: string;
  title: string;
  color: string;
  items: DetailsItem[];
}

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface Cast extends Person {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew extends Person {
  credit_id: string;
  department: string;
  job: string;
}

export interface CreditsResponse {
  cast: Cast[];
  crew: Crew[];
}
