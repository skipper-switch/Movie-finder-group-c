import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieDetails, fetchMovieCredits } from "../../services/Movies";
import { HeroDetails } from "../../components";
import MovieReviews from "../../components/MovieReviews";
import Overview from "../../components/details/overview";
import Cast from "../../components/details/cast";
import { type CastMember } from "../../types/types";

const DetailsPage = () => {
  const { id } = useParams();
  const [overview, setOverview] = useState<string>("");
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    if (!id) return;
    fetchMovieDetails(id).then((data: any) => {
      if (data?.overview) setOverview(data.overview);
    });
    fetchMovieCredits(id).then((data) => setCast(data));
  }, [id]);

  return (
    <div className=" text-white flex flex-col gap-10 w-full">
      <HeroDetails />
      <div className="p-10 flex gap-20 w-full">
        <div className="flex flex-col gap-8 flex-2">
          {overview && <Overview overview={overview} />}
          {cast.length > 0 && <Cast cast={cast} />}
          <MovieReviews movieId={id as string} />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div>Box Office</div>
          <div>CREW</div>
          <div>KEY CREW</div>
        </div>
      </div>
      <div>More Like This</div>
    </div>
  );
};
export default DetailsPage;