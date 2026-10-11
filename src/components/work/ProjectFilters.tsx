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
                ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] border-[#171717] dark:border-white shadow-xs'
                : 'bg-white dark:bg-[#20201E] text-[#77746F] dark:text-[#A1A1AA] border-[#DEDAD3] dark:border-white/10 hover:border-[#171717] dark:hover:border-white/40 hover:text-[#171717] dark:hover:text-white'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[0.68rem] font-mono px-1.5 py-0.5 rounded-full ${
              isActive ? 'bg-[#C7612E] text-white' : 'bg-[#F6F3ED] dark:bg-[#1A1A20] text-[#77746F] dark:text-[#A1A1AA]'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

