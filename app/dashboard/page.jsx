import DashboardPage from "./DashboardPage";

export const metadata = {
  title: "Dashboard | School Management System",
  description:
    "View real-time student attendance, earnings, and announcements in the School Management System dashboard.",
  keywords: [
    "school management system",
    "student attendance",
    "teacher portal",
    "education dashboard",
  ],
  openGraph: {
    title: "School Management Dashboard",
    description:
      "Monitor attendance, view notices, and track analytics — all in one smart school dashboard.",
    url: "https://school-management-frontend-eosin.vercel.app/dashboard",
    siteName: "School Management System",
    images: [
      {
        url: "https://www.schoolappz.in/wp-content/uploads/2019/04/hub.jpg",
        width: 1200,
        height: 630,
        alt: "School Dashboard Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DashboardPage />;
}
