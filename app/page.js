import Home from "@/Components/Home"; // client-side login page

// ✅ SEO metadata for Next.js App Router
export const metadata = {
  title: "Login | School Management System India",
  description:
    "Secure login portal for students and teachers in India to access the School Management System. Manage attendance, view schedules, exams, and notices easily.",
  keywords: [
    "school login India",
    "student login",
    "teacher login",
    "school ERP India",
    "education dashboard",
  ],
  openGraph: {
    title: "Login | School Management System India",
    description:
      "Access your Indian School Management System dashboard securely — for students, teachers, and administrators.",
    url: "https://school-management-frontend-eosin.vercel.app",
    siteName: "School Management System India",
    images: [
      {
        url: "https://www.schoolappz.in/wp-content/uploads/2019/04/hub.jpg",
        width: 1200,
        height: 630,
        alt: "School Management System Login Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | School Management System India",
    description:
      "Login securely to the School Management System — designed for schools and colleges in India.",
    images: [
      "https://www.schoolappz.in/wp-content/uploads/2019/04/hub.jpg",
    ],
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
    shortcut: "/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://school-management-frontend-eosin.vercel.app/",
  },
};

export default function Page() {
  return (
    <main
      className="w-full h-screen bg-black flex items-center justify-center"
      role="main"
      aria-label="Login Page"
    >
      <Home /> {/* ✅ Client-side login component */}
    </main>
  );
}
