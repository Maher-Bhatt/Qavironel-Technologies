import React from 'react';
import { ProjectCategory } from '../../types';
import { playTabSound } from '../../utils/soundEffects';

interface ProjectFiltersProps {
  categories: { id: ProjectCategory; label: string }[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<string, number>;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = counts[cat.id] ?? 0;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              playTabSound();
              onSelectCategory(cat.id);
            }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 shrink-0 flex items-center gap-2 border rounded-full ${
              isActive
                ? 'bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] border-[#0A0A0A] dark:border-white shadow-xs'
                : 'bg-white dark:bg-[#121212] text-zinc-600 dark:text-zinc-400 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[0.68rem] font-mono px-2 py-0.5 rounded-full ${
              isActive 
                ? 'bg-white/20 text-white dark:bg-black/10 dark:text-black' 
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;
