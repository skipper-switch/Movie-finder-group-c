import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../../services/Movies";
import { HeroDetails } from "../../components";

const DetailsPage = () => {
  const { id } = useParams();

  useEffect(() => {
    // Fetch movie details using the id
    fetchMovieDetails(id as string);
  }, [id]);

  return (
    <div className=" text-white flex flex-col gap-10 w-full">
      {/* Movie Details: {id} */}
      {/* <div>Hero</div> */}
      <HeroDetails />
      <div className="flex gap-20 w-full">
        <div className="flex flex-col gap-4 flex-2">
          <div>Overview</div>
          <div>Cast</div>
          <div>Review</div>
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
