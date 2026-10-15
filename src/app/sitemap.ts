import type { MetadataRoute } from 'next';
import { hasPublicUrl, siteUrl } from '../../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!hasPublicUrl) return [];
  return ['/', '/About', '/Projects', '/ContactUs'].map((path) => ({ url: new URL(path, siteUrl).href }));
}
