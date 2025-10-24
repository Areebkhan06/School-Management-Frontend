import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SchoolProvider } from "@/Context/SchoolContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "School Management System | Smart Dashboard for Students & Teachers",
  description:
    "The School Management System is a comprehensive web application built with Next.js that simplifies school operations by providing an all-in-one platform for managing students, teachers, attendance, exams, and notices. Designed with a clean and responsive interface, it allows administrators to monitor daily activities, track attendance, manage class schedules, publish important updates, and generate reports effortlessly. Teachers can easily mark attendance, view student progress, and access academic data in real time, while students can stay updated on their performance, upcoming exams, and school events. Featuring modern UI components, data visualization, and secure authentication, this system ensures smooth communication between staff and students, enhancing productivity and transparency within the school environment.",
  icons: {
    icon: "/images/icon.png",       // correct path
    apple: "/images/icon.png",      // for Apple devices
    shortcut: "/images/icon.png",   // shortcut icon
  },
  keywords: [
    "School Management System",
    "Student Attendance System",
    "Teacher Dashboard",
    "School Dashboard",
    "Next.js School App",
    "Attendance Tracker",
    "Exam Management",
    "Student Information System",
    "Education Management Software",
    "Admin Dashboard",
    "Academic Portal",
    "School ERP",
    "Class Management System",
    "School Website",
    "Online School Platform",
  ],

  openGraph: {
    title: "School Management System | Smart Dashboard for Students & Teachers",
    description:
      "A modern and responsive School Management System built with Next.js, designed for managing students, teachers, attendance, exams, and daily operations — all from one powerful dashboard.",
    url: "https://school-management-frontnend.vercel.app", // replace with your deployed URL
    siteName: "School Management System",
    images: [
      {
        url: "https://www.schoolappz.in/wp-content/uploads/2019/04/hub.jpg",
        width: 1200,
        height: 630,
        alt: "School Management System Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "School Management System | Smart Dashboard for Students & Teachers",
    description:
      "Manage students, teachers, and attendance efficiently with this modern Next.js-based School Management System. Responsive, secure, and user-friendly.",
    images: [
      "https://www.schoolappz.in/wp-content/uploads/2019/04/hub.jpg",
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SchoolProvider>{children}</SchoolProvider>
      </body>
    </html>
  );
}
