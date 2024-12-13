import React from 'react';
import { Star, Music, Gamepad2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 p-6">
      <div className="absolute inset-0 retro-pattern opacity-10"></div>
      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Star className="w-8 h-8 text-yellow-400 sparkle" />
          <h1 className="text-4xl font-bold neon-text font-['VT323']">
            ネオン東京
          </h1>
          <Star className="w-8 h-8 text-yellow-400 sparkle" />
        </div>
        <nav className="flex gap-6">
          <Music className="w-6 h-6 text-purple-600 hover:text-purple-400 transition-colors" />
          <Gamepad2 className="w-6 h-6 text-purple-600 hover:text-purple-400 transition-colors" />
        </nav>
      </div>
    </header>
  );
}