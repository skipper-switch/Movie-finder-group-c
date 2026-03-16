import React from "react";
 
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071a2f] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500 mb-4">CineMax</h2>
          <p className="text-sm leading-relaxed">
            Your ultimate destination for movies and TV shows. Stream thousands
            of titles in stunning quality.
          </p>
        </div>
 
        {/* Browse */}
        <div>
          <h3 className="text-white font-semibold mb-4">Browse</h3>
          <ul className="space-y-2 text-sm">
            <li>Movies</li>
            <li>TV Shows</li>
            <li>New Releases</li>
            <li>Trending</li>
          </ul>
        </div>
 
        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Support</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
 
        {/* Account */}
        <div>
          <h3 className="text-white font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Profile</li>
            <li>Watchlist</li>
            <li>Settings</li>
            <li>Sign Out</li>
          </ul>
        </div>
      </div>
 
      {/* Divider */}
      <div className="border-t border-gray-700"></div>
 
      {/* Copyright */}
      <div className="text-center text-sm py-6">
        © 2026 CineMax. All rights reserved.
      </div>
    </footer>
  );
};
 
export default Footer;