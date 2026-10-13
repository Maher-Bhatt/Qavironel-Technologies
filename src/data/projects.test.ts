import { describe, it, expect } from 'vitest';
import { projects, categories } from './projects';

describe('Project Inventory & Data Integrity', () => {
  it('contains exactly 8 verified projects', () => {
    expect(projects).toHaveLength(8);
  });

  it('all projects have required fields and non-empty values', () => {
    projects.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.category).toBeTruthy();
      expect(p.eyebrow).toBeTruthy();
      expect(p.summary).toBeTruthy();
      expect(p.challenge).toBeTruthy();
      expect(p.solution).toBeTruthy();
      expect(p.whyItMatters).toBeTruthy();
      expect(p.heroImage).toBeTruthy();
      expect(Array.isArray(p.technologies)).toBe(true);
      expect(p.technologies.length).toBeGreaterThan(0);
      expect(Array.isArray(p.workflow)).toBe(true);
      expect(Array.isArray(p.links)).toBe(true);
    });
  });

  it('all project slugs are unique and URL-safe', () => {
    const slugs = projects.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(projects.length);

    slugs.forEach((slug) => {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it('finds projects by slug correctly', () => {
    const kalki = projects.find((p) => p.slug === 'kalki');
    expect(kalki).toBeDefined();
    expect(kalki?.title).toBe('K.A.L.K.I.');

    const nonExistent = projects.find((p) => p.slug === 'non-existent-slug');
    expect(nonExistent).toBeUndefined();
  });

  it('verifies all expected project slugs are present in the inventory', () => {
    const expectedSlugs = [
      'kalki',
      'ztees',
      'classic-infrastructure',
      'civic-sathi',
      'codedroid',
      'itm-notes',
      'chain-of-achievements',
      'socialsafe',
    ];

    expectedSlugs.forEach((slug) => {
      expect(projects.some((p) => p.slug === slug)).toBe(true);
    });
  });

  it('verifies category list contains All Work and known categories', () => {
    const categoryIds = categories.map((c) => c.id);
    expect(categoryIds).toContain('All Work');
    expect(categoryIds).toContain('Client Work');
    expect(categoryIds).toContain('Digital Products');
    expect(categoryIds).toContain('AI & Software');
    expect(categoryIds).toContain('Product Lab');
    expect(categoryIds).toContain('Academic Build');
    expect(categoryIds).toContain('Experiments');
  });
});
