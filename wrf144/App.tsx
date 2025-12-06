
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { WebsiteCard } from './components/WebsiteCard';
import { Footer } from './components/Footer';
import { Category } from './types';
import { WEBSITES, CATEGORIES } from './constants';
import { Telescope } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // If searching, we might want to reset scroll or just let the filter handle it
    if (e.target.value) setActiveCategory('All');
  };

  // Group websites by category
  const groupedWebsites = useMemo(() => {
    const groups: Partial<Record<Category, typeof WEBSITES>> = {};
    
    // Initialize groups based on constant order to preserve sorting
    CATEGORIES.forEach(cat => {
      groups[cat.id] = [];
    });

    // Sort websites into groups, filtering if needed
    WEBSITES.forEach((site) => {
      const term = searchTerm.toLowerCase();
      const matchesSearch = 
        site.title.toLowerCase().includes(term) ||
        site.description.toLowerCase().includes(term) ||
        site.tags?.some(tag => tag.toLowerCase().includes(term));

      if (matchesSearch) {
        if (groups[site.category]) {
          groups[site.category]?.push(site);
        }
      }
    });

    return groups;
  }, [searchTerm]);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId as Category);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const headerOffset = 180; // Adjust for sticky header + nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (categoryId === 'All') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const hasResults = Object.values(groupedWebsites).some(group => group && group.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Category Navigation */}
        <div className="sticky top-[80px] z-10 bg-slate-50/95 backdrop-blur-sm pt-2 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
           <CategoryFilter 
            selectedCategory={activeCategory} 
            onSelectCategory={scrollToCategory} 
          />
        </div>

        {/* Results Sections */}
        {hasResults ? (
          <div className="space-y-10 pb-12">
            {CATEGORIES.map((category) => {
              const sites = groupedWebsites[category.id];
              if (!sites || sites.length === 0) return null;

              return (
                <section key={category.id} id={`category-${category.id}`} className="scroll-mt-48">
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
                    <category.icon className="w-5 h-5 text-indigo-500" />
                    <h2 className="text-xl font-bold text-slate-800">{category.label}</h2>
                    <span className="text-sm text-slate-400 font-medium ml-2 bg-slate-100 px-2 py-0.5 rounded-full">
                      {sites.length}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {sites.map((site) => (
                      <WebsiteCard key={site.id} website={site} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-white p-4 rounded-full shadow-sm mb-4">
              <Telescope className="w-12 h-12 text-indigo-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">未找到结果</h3>
            <p className="text-slate-500 max-w-sm mx-auto">
              没有找到与 "{searchTerm}" 相关的网站。
            </p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 text-indigo-600 font-medium hover:text-indigo-700 hover:underline"
            >
              清空搜索
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
