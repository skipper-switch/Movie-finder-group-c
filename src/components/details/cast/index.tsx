import { type CastProps } from "../../../types/types";

const Cast = ({ cast }: CastProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-2xl font-bold">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cast.slice(0, 4).map((member) => (
          <div key={member.id} className="flex flex-col gap-2">
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#1a1d2e]">
              {member.profile_path ? (
                <img
                  src={member.profile_path}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 text-4xl">
                  👤
                </div>
              )}
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                {member.name}
              </p>
              <p className="text-slate-400 text-sm">{member.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;