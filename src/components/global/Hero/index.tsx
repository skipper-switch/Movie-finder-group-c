import { Play, Plus, Info } from "lucide-react";
const Hero = () => {
  return (
    <section
      className='relative w-full h-[85vh] bg-cover bg-center flex items-center mt-24'
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1608889175123-8ee362201f81')",
      }}
    >
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent'></div>

      {/* Content */}
      <div className='relative z-10 max-w-3xl px-12 text-white'>
        {/* Featured Badge */}
        <span className='bg-red-600 text-white text-sm px-4 py-1 rounded-full'>Featured Movie</span>

        {/* Title */}
        <h1 className='text-7xl font-bold mt-6 mb-6'>The Haunting</h1>

        {/* Movie Info */}
        <div className='flex items-center gap-4 text-gray-300 mb-6'>
          <span className='border border-gray-500 px-3 py-1 rounded'>PG-13</span>

          <span>2026</span>

          <span>•</span>

          <span>2h 15m</span>

          <span>•</span>

          <span>Horror, Thriller</span>
        </div>

        {/* Description */}
        <p className='text-lg text-gray-200 leading-relaxed mb-8'>
          In a remote mansion shrouded in mystery, a group of strangers must confront their deepest
          fears as supernatural forces begin to unravel the fabric of reality. Experience terror
          like never before in this spine-chilling masterpiece.
        </p>

        {/* Buttons */}
        <div className='flex items-center gap-4'>
          <button className='flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition'>
            <Play size={18} />
            Play Now
          </button>

          <button className='flex items-center gap-2 bg-gray-700/70 px-6 py-3 rounded-full hover:bg-gray-600 transition'>
            <Plus size={18} />
            My List
          </button>

          <button className='w-12 h-12 flex items-center justify-center bg-gray-700/70 rounded-full hover:bg-gray-600 transition'>
            <Info size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
