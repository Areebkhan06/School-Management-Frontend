// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://school-management-frontend-eosin.vercel.app/sitemap.xml",
  };
}
