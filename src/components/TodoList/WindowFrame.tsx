import React, { ReactNode } from 'react';
import { Computer } from 'lucide-react';

interface WindowFrameProps {
  title: string;
  children: ReactNode;
}

export default function WindowFrame({ title, children }: WindowFrameProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-[#00F5FF]/30 bg-gradient-to-b from-[rgba(13,2,33,0.95)] to-[rgba(13,2,33,0.85)]">
      <div className="bg-gradient-to-r from-[#2C4F7C] to-[#0C306E] p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Computer className="w-5 h-5 text-[#00F5FF]" />
          <span className="text-[#00F5FF] font-['Tahoma'] text-sm" style={{ textShadow: '0 0 5px rgba(0, 245, 255, 0.5)' }}>
            {title}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="w-6 h-6 bg-[#ECF4FE] rounded-sm hover:bg-white flex items-center justify-center">
            <span className="text-black font-bold">_</span>
          </button>
          <button className="w-6 h-6 bg-[#ECF4FE] rounded-sm hover:bg-white flex items-center justify-center">
            <span className="text-black font-bold">□</span>
          </button>
          <button className="w-6 h-6 bg-red-600 rounded-sm hover:bg-red-700 flex items-center justify-center">
            <span className="text-white font-bold">×</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}