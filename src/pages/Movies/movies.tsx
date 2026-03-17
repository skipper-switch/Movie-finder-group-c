import { useEffect, useState } from "react";
import { useParams } from "react-router";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface Video {
  key: string;
  type: string;
  site: string;
}

const Movies = () => {
  const { id } = useParams();

  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          (v: Video) => v.type === "Trailer" && v.site === "YouTube"
        );
        setVideo(trailer);
      });
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="py-20 px-6 text-white">
      {video && (
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${video.key}`}
          title="Trailer"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Movies;