import React from 'react';
import { Smartphone, Tv, Radio, GamepadIcon } from 'lucide-react';

const RetroItem = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -z-10"></div>
    <Icon className="w-12 h-12 text-purple-600 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function RetroGrid() {
  const items = [
    {
      icon: Smartphone,
      title: "ポケベル",
      description: "90s Pager Culture"
    },
    {
      icon: Tv,
      title: "アニメ",
      description: "Magical Shows"
    },
    {
      icon: Radio,
      title: "シティポップ",
      description: "City Pop Vibes"
    },
    {
      icon: GamepadIcon,
      title: "ゲーム",
      description: "Retro Gaming"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {items.map((item, index) => (
        <RetroItem key={index} {...item} />
      ))}
    </div>
  );
}