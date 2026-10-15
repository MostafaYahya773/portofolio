const configuredUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
export const siteUrl = new URL(configuredUrl || 'http://localhost:3000');
export const hasPublicUrl = Boolean(configuredUrl) && siteUrl.hostname !== 'localhost';
