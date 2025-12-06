
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Website } from '../types';

interface WebsiteCardProps {
  website: Website;
}

export const WebsiteCard: React.FC<WebsiteCardProps> = ({ website }) => {
  const [imgError, setImgError] = useState(false);
  
  // Google's favicon service
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${website.url}&sz=128`;

  return (
    <a 
      href={website.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-white rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100/50 hover:-translate-y-1 hover:border-indigo-300 h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-white group-hover:border-indigo-100 transition-colors">
            {!imgError ? (
              <img 
                src={faviconUrl} 
                alt={`${website.title} icon`} 
                className="w-6 h-6 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm">
                {website.title.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {website.title}
          </h3>
        </div>
        
        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors" />
      </div>
      
      <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2 flex-grow h-[2.5em]">
        {website.description}
      </p>

      {website.tags && website.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-50 group-hover:border-indigo-50 transition-colors">
          {website.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};
