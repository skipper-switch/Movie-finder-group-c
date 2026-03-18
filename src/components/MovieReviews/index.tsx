import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard";
import { fetchMovieReviews } from "../../services/Movies";
import { type MovieReviewsProps, type ReviewProps } from "../../types/types";

const MovieReviews = ({ movieId }: MovieReviewsProps) => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
      setLoading(false);
    };

    if (movieId) loadReviews();
  }, [movieId]);

  if (loading) {
    return (
      <div className="mt-8">
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
          <p className="text-gray-400 text-sm">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className="mt-8">
        <p className="text-gray-500 text-sm">
          No reviews available for this movie.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h3 className="text-white text-xl font-semibold mb-4 pl-3 border-l-4 border-red-600">
        Reviews ({reviews.length})
      </h3>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
};

export default MovieReviews;