import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../../services/Movies";
import { HeroDetails } from "../../components";
import DetailsCard from "../../components/details/detailsCard";
import type { MovieDetails } from "../../types/types";
import { DollarSign, Star } from "lucide-react";

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchMovieDetails(id).then((data: MovieDetails) => setMovie(data));
  }, [id]);

  const director = movie?.credits.crew.find(
    (member) => member.department === "Directing" && member.job === "Director",
  );

  const writers =
    movie?.credits.crew.filter((member) => member.department === "Writing") ||
    [];

  return (
    <div className=" text-white flex flex-col gap-10 w-full">
      {/* Movie Details: {id} */}
      {/* <div>Hero</div> */}
      <HeroDetails movie={movie} />
      <div className="flex gap-20 w-full p-4">
        <div className="flex flex-col gap-4 flex-2">
          <div className="p-2 text-start">
            <p>{movie?.overview}</p>
          </div>
          <div>Cast</div>
          <div>Review</div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <DetailsCard
              bg={"bg-gradient-to-r from-purple-500 to-pink-500"}
              color="#ffffff"
              title={"Box Office"}
              items={[
                {
                  icon: DollarSign,
                  header: "Budget",
                  text: `${movie?.budget}`,
                },
                {
                  icon: DollarSign,
                  header: "Revenue",
                  text: `${movie?.revenue}`,
                },
                { icon: Star, header: "Votes", text: `${movie?.vote_count}` },
              ]}
            />
          </div>
          <div>
            <DetailsCard
              bg={"bg-[#101828]"}
              color="text-gray-400"
              title={"CREW"}
              items={[
                { header: "Director", text: director?.name || "N/A" },
                {
                  header: "Writers",
                  text: writers?.map((w) => w.name).join(", ") || "N/A",
                },
              ]}
            />
          </div>
          <div>KEY CREW</div>
        </div>
      </div>
      <div>More Like This</div>
    </div>
  );
};

export default DetailsPage;
