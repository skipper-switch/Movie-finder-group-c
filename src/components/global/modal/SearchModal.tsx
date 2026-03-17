import { Search, X, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { SearchProps } from "../../../types/types";
import { searchMovies } from "../../../services/Movies";
import { POSTER_BASE } from "../../../utils/constants";
import { Link } from "react-router";

type Props = {
  isOpen: boolean;
  onClose: () => void; // Keep if you want to show "initial" or "local" suggestions
};

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // 2. Debounced API Search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(async () => {
      const data = await searchMovies(query);
      setResults(data?.results || []);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[100] backdrop-blur-sm flex justify-center pt-20 bg-black/40'>
      <div className='w-[80%] max-w-4xl h-fit bg-[#0b1220]/90 rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
        {/* Top Bar */}
        <div className='flex items-center gap-3 px-6 py-4 border-b border-white/10'>
          <Search className='text-gray-400' />
          <input
            autoFocus
            type='text'
            placeholder='Search movies...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='flex-1 bg-transparent outline-none text-white text-lg'
          />
          <button onClick={onClose}>
            <X className='text-gray-400 hover:text-white' />
          </button>
        </div>

        {/* Results */}
        <div className='max-h-[400px] overflow-y-auto'>
          {isLoading ? (
            <p className='text-center text-gray-500 py-10'>Searching...</p>
          ) : results.length > 0 ? (
            results.map((movie) => (
              <Link to={`/details/${movie.id}`} onClick={onClose}>
                <div
                  key={movie.id}
                  className='flex items-center gap-4 px-6 py-4 hover:bg-white/5 cursor-pointer transition'
                >
                  <img
                    src={`${POSTER_BASE}${movie.poster_path}` || "/placeholder-poster.png"}
                    alt={movie.title}
                    className='w-14 h-14 rounded-lg object-cover'
                  />
                  <div className='flex-1'>
                    <h3 className='text-white font-semibold'>{movie.title}</h3>
                    <p className='text-sm text-gray-400 flex items-center gap-2'>
                      {movie.release_date} • {movie.overview}
                      <span className='flex items-center gap-1 text-yellow-400'>
                        <Star size={14} />
                        {movie.vote_average}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className='text-center text-gray-500 py-10'>
              {query ? "No results found" : "Start typing to search..."}
            </p>
          )}
        </div>

        <div className='text-center text-gray-400 text-sm py-3 border-t border-white/10'>
          {results.length} results found
        </div>
      </div>
    </div>
  );
}
