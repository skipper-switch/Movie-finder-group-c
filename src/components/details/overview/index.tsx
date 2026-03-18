import { type OverviewProps } from "../../../types/types";

const Overview = ({ overview }: OverviewProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-white text-2xl font-bold">Overview</h2>
      <p className="text-slate-300 text-base leading-relaxed">{overview}</p>
    </div>
  );
};

export default Overview;