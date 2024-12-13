import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80"
          alt="Tokyo Street at Night"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center p-8">
        <h2 className="text-6xl font-['VT323'] text-white mb-6 neon-text">
          90年代の日本
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Experience the magic of 90s Japan: Sailor Moon, City Pop, and Bubble Era dreams
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
          <Sparkles className="w-5 h-5" />
          Explore More
        </button>
      </div>
    </div>
  );
}