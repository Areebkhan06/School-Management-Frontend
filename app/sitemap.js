// app/sitemap.js
export const dynamic = 'force-static'; // 👈 important for static generation

export default function sitemap() {
  const baseUrl = "https://school-management-frontend-eosin.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard/Attendance`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard/Teachers`,
      lastModified: new Date(),
    },
  ];
}
