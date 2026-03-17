import { useEffect, useState } from "react";
import MovieCard from "./_components/movie-card";
import { fetchMovies, type Movie } from "../../../services/Movies";
import type { MovieProps } from "../../../types/types";

export default function MovieCarousel() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = await fetchMovies();
    setMovies(data);
  };

  return (
    <div className="w-full py-6 px-6">
      <h1 className="text-[0b1220] text-2xl py-5">Trending Movies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 relative">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
