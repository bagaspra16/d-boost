import { MetadataRoute } from 'next';
import { siteDetails } from '@/data/siteDetails';

const baseUrl = siteDetails.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-09-11'),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'id-ID': baseUrl,
          'en-US': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/early-access`,
      lastModified: new Date('2026-09-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'id-ID': `${baseUrl}/early-access`,
          'en-US': `${baseUrl}/early-access`,
        },
      },
    },
  ];
}
