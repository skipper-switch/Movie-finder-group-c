import type { MovieProps } from "../../types/types";
import { setUpQuery } from "../../utils";
import { GENRES, POSTER_BASE } from "../../utils/constants";
import Request from "../apiClient";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  rating: number;
  image: string;
  trailer?: string;
}

export const fetchMovies = async (): Promise<MovieProps[]> => {
  try {
    const query = setUpQuery({
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    });

    const data = await Request.get(`/movie/popular${query}`);

    return data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      year: movie.release_date?.split("-")[0],
      genre:
        GENRES.filter((genre) => movie.genre_ids.includes(genre.id))
          .map((g) => g.name)
          .join(", ") || "Movie",
      rating: Number(movie.vote_average.toFixed(1)),
      image: `${POSTER_BASE}${movie.poster_path}`,
    }));
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId: string) => {
  try {
    const query = setUpQuery({
      api_key: API_KEY,
      language: "en-US",
    });

    const data = await Request.get(`/movie/${movieId}${query}`);

    return data;
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    return null;
  }
};

export const searchMovies = async (searchQuery: string) => {
  try {
    const query = setUpQuery({
      api_key: API_KEY,
      language: "en-US",
      query: searchQuery,
    });

    const data = await Request.get(`/search/movie${query}`);
    console.log("SEARCH RESPONSE", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    return null;
  }
};

export const fetchGenres = async () => {
  const query = setUpQuery({
    api_key: API_KEY,
  });

  const data = await Request.get(`/genre/movie/list${query}`);

  return data.genres;
};
