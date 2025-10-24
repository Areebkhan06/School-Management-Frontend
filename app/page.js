import Home from "@/Components/Home"; // Home can be client-only

export const metadata = {
  title: "School Management System | Login",
  description:
    "Secure login portal for students and teachers to access the School Management System. Manage attendance, view schedules, exams, and notices easily.",
  keywords: [
    "School Login",
    "Student Login",
    "Teacher Login",
    "School Management System",
    "Education Dashboard",
  ],
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
    shortcut: "/images/icon.png",
  },
};

export default function Page() {
  return (
    <div className="w-full h-screen bg-black">
      <Home /> {/* Home is still client-only */}
    </div>
  );
}
