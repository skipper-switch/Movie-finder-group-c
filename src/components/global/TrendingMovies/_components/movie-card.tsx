import { Star, Play } from "lucide-react";
import type { MovieProps } from "../../../../types/types";
import { Link } from "react-router";

export default function MovieCard({ id, title, year, genre, rating, image, trailer }: MovieProps) {
  return (
    <Link to={`/details/${id}`} className='block'>
      <div
        className='
      relative
      min-w-[180px] h-[320px]
      rounded-md overflow-hidden
      cursor-pointer
      group
      transition-all duration-300 ease-out
      hover:scale-105 hover:-translate-y-3
      hover:z-20
      hover:shadow-2xl
      hover:ring-1 hover:ring-amber-300
      '
      >
        {/* background image */}
        <img
          src={image}
          className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />

        {/* gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

        {/* play button */}
        {trailer && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-white/80 rounded-full p-4 backdrop-blur'>
              <Play className='w-6 h-6 text-black' />
            </div>
          </div>
        )}

        {/* bottom info */}
        <div className='absolute bottom-4 left-4 right-4 text-white'>
          <div className='flex items-center gap-1 text-sm mb-1'>
            <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
            <span>{rating}</span>
          </div>

          <h3 className='font-semibold text-lg'>{title}</h3>

          <p className='text-sm text-gray-300'>
            {year} • {genre}
          </p>
        </div>
      </div>
    </Link>
  );
}
