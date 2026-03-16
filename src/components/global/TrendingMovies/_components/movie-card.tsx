import { Star, Play } from "lucide-react";
import type { MovieProps } from "../../../../types/types";

export default function MovieCard({
  title,
  year,
  genre,
  rating,
  image,
  trailer,
}: MovieProps) {
  return (
    <div className="relative min-w-[260px] h-[420px] rounded-2xl overflow-hidden group cursor-pointer">
      {/* background image */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* play button */}
      {trailer && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 rounded-full p-4 backdrop-blur">
            <Play className="w-6 h-6 text-black" />
          </div>
        </div>
      )}

      {/* bottom info */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center gap-1 text-sm mb-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span>{rating}</span>
        </div>

        <h3 className="font-semibold text-lg">{title}</h3>

        <p className="text-sm text-gray-300">
          {year} • {genre}
        </p>
      </div>
    </div>
  );
}
