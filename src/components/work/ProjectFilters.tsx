import React from 'react';
import { ProjectCategory } from '../../types';

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
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 shrink-0 flex items-center gap-2 border ${
              isActive
                ? 'bg-[#171717] text-white border-[#171717] shadow-xs'
                : 'bg-white text-[#6E6B65] border-[#E5E2DC] hover:border-[#171717] hover:text-[#171717]'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[0.68rem] font-mono px-1.5 py-0.5 ${
              isActive ? 'bg-[#C7612E] text-white' : 'bg-[#F5F2EB] text-[#8E8B84]'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
