import { useEffect, useState } from "react";
import MovieCard, { type Movie } from "./_components/movie-card";

export default function MovieCarousel() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`,
      );

      const data = await res.json();

      const formattedMovies: Movie[] = data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date?.split("-")[0],
        genre: "Movie",
        rating: Number(movie.vote_average.toFixed(1)),
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));

      setMovies(formattedMovies);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  return (
    <div className='w-full py-6 px-6'>
      <h1 className='text-[0b1220] text-2xl py-5'>Trending Movies</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:max-w-[1200px] m-auto relative'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
