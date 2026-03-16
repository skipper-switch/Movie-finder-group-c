import HomePage from "."
import { Footer, Navbar } from "../components"
import MovieCarousel from "../components/global/TrendingMovies/_components/movie-carousel"



const Home = () => {
  return (
    <div>
    <Navbar />
      <HomePage />
      <MovieCarousel />
       <Footer />
    </div>
  )
}

export default Home