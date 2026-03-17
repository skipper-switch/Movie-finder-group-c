import HomePage from "./Home";
import { Footer, Navbar } from "../components";
import MovieCarousel from "../components/global/TrendingMovies/movie-carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <MovieCarousel />
      <Footer />
    </div>
  );
};

export default Home;
