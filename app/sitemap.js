export default function sitemap() {
  const baseUrl = "https://school-management-frontend-self.vercel.app";

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


// google-site-verification=xzL5JSHfnuEyqMWEUY_EUrUp2D30jX4N9pFDLfyUabk