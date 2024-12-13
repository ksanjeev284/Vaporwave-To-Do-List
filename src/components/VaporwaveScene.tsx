import React from 'react';
import { Palmtree, Cloud, Monitor } from 'lucide-react';

export default function VaporwaveScene() {
  return (
    <div className="relative bg-gradient-to-b from-[#FF6EC7] to-[#7873F5] p-12 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-white">
          <Palmtree className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-['VT323'] mb-2">Aesthetic Vibes</h3>
          <p>Vaporwave aesthetics meet Japanese city pop culture</p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-white">
          <Cloud className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-['VT323'] mb-2">Digital Dreams</h3>
          <p>Where retro technology meets dreamy aesthetics</p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-white">
          <Monitor className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-['VT323'] mb-2">Tech Nostalgia</h3>
          <p>Celebrating the golden age of Japanese electronics</p>
        </div>
      </div>
    </div>
  );
}