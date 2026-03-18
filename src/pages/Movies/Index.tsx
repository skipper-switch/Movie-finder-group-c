import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/global/Button";
import { ArrowLeft } from "lucide-react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface Video {
  key: string;
  type: string;
  site: string;
}

const MoviesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results.find(
          (v: Video) => v.type === "Trailer" && v.site === "YouTube",
        );
        setVideo(trailer);
      });
  }, [id]);

  if (!video)
    return (
      <div className="mt-24 text-white">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="mt-24 py-10 px-6 text-white flex gap-4 flex-col">
      <Button
        variant="icon"
        size="sm"
        onClick={() => navigate(-1)}
        className=""
      >
        <ArrowLeft className="w-4 h-4 text-white" />
      </Button>
      
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

export default MoviesPage;
