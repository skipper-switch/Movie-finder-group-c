import { Search, Bell, Sun, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <nav className='nav absolute w-full bg-gradient-to-r from-[#0b0f1fdc] to-[#1c2235de]  backdrop-blur-md py-8 px-8 flex items-center justify-between'>
        {/* Left Section */}
        <div className='flex items-center gap-10'>
          {/* Logo */}
          <div className='text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
            CineMax
          </div>

          {/* Nav Links */}
          <ul className='hidden lg:flex items-center gap-8 text-gray-300'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>Movies</li>
            <li className='hover:text-white cursor-pointer'>TV Shows</li>
            <li className='hover:text-white cursor-pointer'>Trending</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-6 text-gray-300'>
          <button className='hover:text-white'>
            <Search size={20} />
          </button>

          <button className='hover:text-white'>
            <Bell size={20} />
          </button>

          <button className='hover:text-yellow-400'>
            <Sun size={20} />
          </button>

          {/* Profile */}
          <div className='w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white'>
            <User size={18} />
          </div>
        </div>
      </nav>
    </header>
  );
}
