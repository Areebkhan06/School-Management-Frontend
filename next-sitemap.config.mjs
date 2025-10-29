/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://school-management-frontend-eosin.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*'],
};
