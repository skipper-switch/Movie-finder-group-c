import { Play, Plus, Info, Check, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { fetchMovieDetails } from "../../../services/Movies";
import { BACKDROP_BASE } from "../../../utils/constants";
import Badge from "../Badge";
import Button from "../Button";

function formatRuntime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function getYear(releaseDate: string): string {
  return releaseDate?.split("-")[0] ?? "";
}

// Infer the type directly from the service — no duplication
type MovieDetails = Awaited<ReturnType<typeof fetchMovieDetails>>;

interface HeroProps {
  movie: NonNullable<MovieDetails>;
}

const Hero = ({ movie }: HeroProps) => {
  const navigate = useNavigate();
  const [inList, setInList] = useState(false);

  const backdropUrl = movie.backdrop_path ? `${BACKDROP_BASE}${movie.backdrop_path}` : undefined;

  return (
    <section
      className='relative w-full h-[85vh] bg-cover bg-center flex items-center mt-24'
      style={{
        backgroundImage: backdropUrl ? `url('${backdropUrl}')` : undefined,
        backgroundColor: !backdropUrl ? "#0d1117" : undefined,
      }}
    >
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent' />

      {/* Content */}
      <div className='relative z-10 max-w-3xl px-12 text-white'>
        {/* Featured Badge */}
        <span className='bg-red-600 text-white text-sm px-4 py-1 rounded-full'>Featured Movie</span>

        {/* Title */}
        <h1 className='text-4xl md:text-7xl font-bold mt-6 mb-6'>{movie.title}</h1>

        {/* Movie Info */}
        <div className='flex items-center gap-4 text-gray-300 mb-6 flex-wrap'>
          <Badge variant='rating' icon={<Star className='w-4 h-4 fill-current' />}>
            {movie.vote_average.toFixed(1)}
          </Badge>

          <span className='border border-gray-500 px-3 py-1 rounded'>
            {movie.adult ? "18+" : "PG-13"}
          </span>

          {movie.release_date && <span>{getYear(movie.release_date)}</span>}

          {movie.runtime > 0 && (
            <>
              <span>•</span>
              <span>{formatRuntime(movie.runtime)}</span>
            </>
          )}

          {movie.genres.slice(0, 3).map((genre: { id: string; name: string }) => (
            <Badge key={genre.id}>{genre.name}</Badge>
          ))}
        </div>

        {/* Description */}
        <p className='text-lg text-gray-200 leading-relaxed mb-8 line-clamp-3'>{movie.overview}</p>

        {/* Buttons */}
        <div className='flex items-center gap-4 flex-wrap'>
          <Button
            variant='primary'
            size='lg'
            leftIcon={<Play size={18} />}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            Play Now
          </Button>

          <Button
            variant='glass'
            onClick={() => setInList((v) => !v)}
            leftIcon={inList ? <Check size={16} /> : <Plus size={16} />}
          >
            {inList ? "In My List" : "My List"}
          </Button>

          <Button variant='icon' size='md' onClick={() => navigate(`/details/${movie.id}`)}>
            <Info size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
