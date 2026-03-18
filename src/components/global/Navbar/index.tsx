import { Search, Sun, User, Moon } from "lucide-react";
import { useState } from "react";
import SearchModal from "../modal/SearchModal";
import { useTheme } from "../hooks/theme";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const { dark, setDark } = useTheme();
  return (
    <>
      <header className='fixed inset-x-0 top-0 z-50'>
        <nav className='nav absolute w-full bg-gradient-to-r from-[#0b0f1fdc] to-[#1c2235de] backdrop-blur-md py-8 px-12 flex items-center justify-between'>
          {/* Left */}
          <div className='flex items-center gap-10'>
            <div className='text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
              CineMax
            </div>
          </div>

          {/* Right */}
          <div className='flex items-center gap-6 text-gray-300'>
            <button onClick={() => setOpenSearch(true)}>
              <Search size={20} />
            </button>

            <button onClick={() => setDark(!dark)}>
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className='w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white'>
              <User size={18} />
            </div>
          </div>
        </nav>
      </header>

      {/* ✅ OUTSIDE NAV */}
      <SearchModal isOpen={openSearch} onClose={() => setOpenSearch(false)}  />
    </>
  );
}
