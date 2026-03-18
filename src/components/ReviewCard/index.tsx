import { useState } from "react";
import { type ReviewProps } from "../../types/types";

const ReviewCard = ({
  author,
  avatarPath,
  rating,
  content,
  createdAt,
  url,
}: ReviewProps) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 300;
  const isLong = content.length > MAX_LENGTH;

  return (
    <div className="bg-[#1c1c2e] border border-[#2e2e4a] rounded-xl p-5 mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
          {avatarPath ? (
            <img
              src={avatarPath}
              alt={author}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <span>{author.charAt(0).toUpperCase()}</span>
          )}
        </div>

        <div className="flex-1">
          <h4 className="text-white font-semibold text-sm">{author}</h4>
          <span className="text-gray-500 text-xs">{createdAt}</span>
        </div>

        {rating !== null && (
          <div className="text-yellow-400 font-semibold text-sm">
            ⭐ {rating}/10
          </div>
        )}
      </div>

      {/* Content */}
      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line mb-3">
        {isLong && !expanded ? `${content.slice(0, MAX_LENGTH)}...` : content}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-red-500 text-xs hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 text-xs hover:text-white transition-colors ml-auto"
        >
          View on TMDB ↗
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;