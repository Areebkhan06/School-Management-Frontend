import Home from "@/Components/Home"; // client-side login page

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
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
    shortcut: "/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Page() {
  return (
    <div className="w-full h-screen bg-black">
      <Home /> {/* Client-side login UI */}
    </div>
  );
}
