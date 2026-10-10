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
                ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xs'
                : 'bg-white text-[#52525B] border-[#E5E7EB] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[0.68rem] font-mono px-1.5 py-0.5 ${
              isActive ? 'bg-[#E0561B] text-white' : 'bg-[#F4F4F5] text-[#71717A]'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
