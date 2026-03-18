const HeroSkeleton = () => {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center mt-24 overflow-hidden bg-[#0d1117]"
    >
      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -800px 0; }
          100% { background-position: 800px 0; }
        }
        .skeleton-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.05) 25%,
            rgba(255,255,255,0.1) 50%,
            rgba(255,255,255,0.05) 75%
          );
          background-size: 800px 100%;
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>

      {/* Background placeholder */}
      <div className="absolute inset-0 bg-[#111520]" />

      {/* Gradient overlay (same as Hero) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-12 text-white w-full">
        {/* Featured badge */}
        <div
          className="rounded-full skeleton-shimmer mb-6"
          style={{ width: "140px", height: "28px" }}
        />

        {/* Title */}
        <div className="flex flex-col gap-3 mb-6">
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "80%", height: "48px" }}
          />
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "60%", height: "48px" }}
          />
        </div>

        {/* Movie info row */}
        <div className="flex items-center gap-4 flex-wrap mb-6">
          <div
            className="rounded-full skeleton-shimmer"
            style={{ width: "70px", height: "28px" }}
          />
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "60px", height: "28px" }}
          />
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "50px", height: "20px" }}
          />
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "80px", height: "20px" }}
          />

          {/* Genre pills */}
          <div
            className="rounded-full skeleton-shimmer"
            style={{ width: "70px", height: "24px" }}
          />
          <div
            className="rounded-full skeleton-shimmer"
            style={{ width: "60px", height: "24px" }}
          />
          <div
            className="rounded-full skeleton-shimmer"
            style={{ width: "65px", height: "24px" }}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3 mb-8">
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "100%", height: "18px" }}
          />
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "95%", height: "18px" }}
          />
          <div
            className="rounded-md skeleton-shimmer"
            style={{ width: "85%", height: "18px" }}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <div
            className="rounded-full skeleton-shimmer"
            style={{ width: "150px", height: "44px" }}
          />
          <div
            className="rounded-full skeleton-shimmer"
            style={{ width: "120px", height: "44px" }}
          />
          <div
            className="rounded-full skeleton-shimmer"
            style={{ width: "44px", height: "44px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;