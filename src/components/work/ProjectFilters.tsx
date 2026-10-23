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
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap items-center gap-2 pb-2">
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
            aria-pressed={isActive}
            className={`px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.11em] transition-all duration-200 shrink-0 flex items-center gap-2 border rounded-full ${
              isActive
                ? 'bg-[#161616] dark:bg-[#D4D4D4] text-white dark:text-[#111111] border-[#161616] dark:border-[#D4D4D4] shadow-xs'
                : 'bg-transparent dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 border-[#D8D8D8] dark:border-white/15 hover:border-[#161616] dark:hover:border-[#D4D4D4] hover:text-[#161616] dark:hover:text-white'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[0.65rem] font-mono px-1.5 py-0.5 rounded-full ${
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
