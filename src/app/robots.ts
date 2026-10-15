import type { MetadataRoute } from 'next';
import { hasPublicUrl, siteUrl } from '../../lib/site';

export default function robots(): MetadataRoute.Robots {
  return hasPublicUrl
    ? { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: new URL('/sitemap.xml', siteUrl).href }
    : { rules: { userAgent: '*', disallow: '/' } };
}
