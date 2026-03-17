import { useEffect, useState } from "react";
import { Hero } from "../../components";
import MovieCarousel from "../../components/global/TrendingMovies/movie-carousel";
import { fetchMovieDetails, fetchMovies } from "../../services/Movies";

const HomePage = () => {
  const [heroMovie, setHeroMovie] = useState(null);

  useEffect(() => {
    const loadHeroMovie = async () => {
      const movies = await fetchMovies();
      if (!movies?.length) return;

      const randomIndex = Math.floor(Math.random() * movies.length);
      const chosenHero = movies[randomIndex];

      const data = await fetchMovieDetails(String(chosenHero.id));
      setHeroMovie(data);
    };

    loadHeroMovie();
  }, []);

  return (
    <>
      {heroMovie && <Hero movie={heroMovie} />}
      <MovieCarousel />
    </>
  );
};

export default HomePage;
