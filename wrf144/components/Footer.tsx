
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} 我的导航 (WebDirectory).</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Powered by React</span>
            <Heart className="w-3.5 h-3.5 text-red-400 mx-1 fill-current" />
            <span>& Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
