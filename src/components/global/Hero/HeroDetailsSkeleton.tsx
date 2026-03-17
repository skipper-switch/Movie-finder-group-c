const HeroDetailsSkeleton = () => {
  return (
    <section
      className="relative w-full overflow-hidden h-full flex justify-center items-center mt-24 bg-[#0d1117]"
      style={{ minHeight: "600px" }}
    >
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -800px 0; }
          100% { background-position: 800px 0; }
        }
        .skeleton-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 25%,
            rgba(255,255,255,0.09) 50%,
            rgba(255,255,255,0.04) 75%
          );
          background-size: 800px 100%;
          animation: shimmer 1.6s infinite linear;
        }
      `}</style>

      {/* Faint backdrop placeholder */}
      <div className="absolute inset-0 bg-[#111520]" />

      {/* Back button skeleton */}
      <div
        className="absolute top-5 left-5 z-20 w-9 h-9 rounded-full skeleton-shimmer"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex items-center gap-7 px-16 py-10 h-full w-full"
        style={{ minHeight: "400px" }}
      >
        {/* Poster skeleton */}
        <div
          className="hidden md:block shrink-0 rounded-xl skeleton-shimmer"
          style={{ width: "250px", height: "400px" }}
        />

        {/* Info skeleton */}
        <div className="flex flex-col gap-4 max-w-xl w-full">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <div
              className="rounded-md skeleton-shimmer"
              style={{ width: "55%", height: "44px" }}
            />
            <div
              className="rounded-md skeleton-shimmer"
              style={{ width: "35%", height: "44px" }}
            />
          </div>

          {/* Tagline */}
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "65%", height: "20px" }}
          />

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Rating badge */}
            <div
              className="rounded-full skeleton-shimmer"
              style={{ width: "68px", height: "30px" }}
            />
            {/* Runtime */}
            <div
              className="rounded-md skeleton-shimmer"
              style={{ width: "72px", height: "20px" }}
            />
            {/* Date */}
            <div
              className="rounded-md skeleton-shimmer"
              style={{ width: "110px", height: "20px" }}
            />
            {/* Genre tags */}
            <div
              className="rounded-full skeleton-shimmer"
              style={{ width: "76px", height: "24px" }}
            />
            <div
              className="rounded-full skeleton-shimmer"
              style={{ width: "64px", height: "24px" }}
            />
            <div
              className="rounded-full skeleton-shimmer"
              style={{ width: "60px", height: "24px" }}
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-1">
            {/* Watch Now */}
            <div
              className="rounded-full skeleton-shimmer"
              style={{ width: "136px", height: "40px" }}
            />
            {/* My List */}
            <div
              className="rounded-full skeleton-shimmer"
              style={{ width: "108px", height: "40px" }}
            />
            {/* Share */}
            <div
              className="rounded-full skeleton-shimmer"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDetailsSkeleton;
