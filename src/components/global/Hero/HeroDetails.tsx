import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchMovieDetails } from "../../../services/Movies";
import HeroDetailsSkeleton from "./HeroDetailsSkeleton";
import { BACKDROP_BASE, POSTER_BASE } from "../../../utils/constants";
import Badge from "../Badge";
import { Check, Play, Plus, Share, Star } from "lucide-react";
import Button from "../Button";

// TMDB image base URLs

interface Genre {
  id: number;
  name: string;
}

interface MovieDetails {
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
}

function formatRuntime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

const HeroDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [inList, setInList] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchMovieDetails(id).then((data: MovieDetails) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <HeroDetailsSkeleton />;
  }

  const backdropUrl = movie.backdrop_path
    ? `${BACKDROP_BASE}${movie.backdrop_path}`
    : null;
  const posterUrl = movie.poster_path
    ? `${POSTER_BASE}${movie.poster_path}`
    : null;

  return (
    <section
      className="relative w-full overflow-hidden h-full flex justify-center items-center mt-24"
      style={{ minHeight: "600px" }}
    >
      {/* Backdrop */}
      {backdropUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        />
      )}

      {/* Dark gradient overlay — stronger on left to ensure text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,12,20,0.97) 0%, rgba(10,12,20,0.82) 40%, rgba(10,12,20,0.45) 70%, rgba(10,12,20,0.15) 100%)"
        }}
      />

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          className="w-4 h-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Content */}
      <div
        className="relative z-10 flex items-center gap-7 px-4 md:px-10 py-10 h-full w-full"
        style={{ minHeight: "400px" }}
      >
        {/* Poster */}
        {posterUrl && (
          <div
            className="hidden md:block shrink-0 rounded-xl overflow-hidden shadow-2xl "
            style={{ width: "250px", height: "400px" }}
          >
            <img
              src={posterUrl}
              alt={`${movie.title} poster`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Info */}
        <div className="flex flex-col gap-4 max-w-xl">
          {/* Title */}
          <h1
            className="text-white font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.5px"
            }}
          >
            {movie.title}
          </h1>

          {/* Tagline */}
          {movie.tagline && (
            <p
              className="text-white/70 italic"
              style={{ fontSize: "1.05rem", fontFamily: "'Georgia', serif" }}
            >
              {movie.tagline}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            {/* Rating */}
            <Badge
              variant="rating"
              icon={<Star className="w-4 h-4 fill-current" />}
            >
              {movie.vote_average.toFixed(1)}
            </Badge>

            {/* Runtime */}
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M12 7v5l3 3" />
              </svg>
              {formatRuntime(movie.runtime)}
            </span>

            {/* Release date */}
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {formatDate(movie.release_date)}
            </span>

            {movie.genres.slice(0, 3).map((g) => (
              <Badge key={g.id}>{g.name}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-1">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<Play size={18} />}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              Play Now
            </Button>

            <Button
              variant="glass"
              onClick={() => setInList((v) => !v)}
              leftIcon={inList ? <Check size={16} /> : <Plus size={16} />}
            >
              {inList ? "In My List" : "My List"}
            </Button>

            <Button
              variant="icon"
              onClick={() =>
                navigator.share?.({
                  title: movie.title,
                  url: window.location.href
                })
              }
            >
              <Share size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDetails;
