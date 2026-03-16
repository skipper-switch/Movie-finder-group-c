import { useParams } from "react-router";

const DetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="mt-30 text-white flex flex-col gap-10 w-full">
      Movie Details: {id}
      <div>Hero</div>
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
