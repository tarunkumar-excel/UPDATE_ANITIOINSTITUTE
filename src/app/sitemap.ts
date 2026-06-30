import type { MetadataRoute } from 'next';
import { allCourses } from '@/data/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.anitioinstitute.com';
  const staticPages = ['', '/about', '/courses', '/contact', '/results', '/schedule', '/privacy', '/terms'].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
  const coursePages = allCourses.map(c => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [...staticPages, ...coursePages];
}
