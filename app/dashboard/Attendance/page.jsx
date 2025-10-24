"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  GraduationCap,
  CheckCircle2,
  XCircle,
  Search,
  TrendingUp,
  User,
} from "lucide-react";

const AttendancePage = () => {
  const [role, setRole] = useState("student");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Attendance records by date
  const [attendanceData, setAttendanceData] = useState({
    student: {
      "2025-10-23": [
        { id: 1, name: "Ayaan Khan", roll: "101", status: "Present" },
        { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
        { id: 3, name: "Karan Patel", roll: "103", status: "Present" },
        { id: 4, name: "Neha Singh", roll: "104", status: "Present" },
        { id: 5, name: "Arjun Verma", roll: "105", status: "Absent" },
      ],
      "2025-10-22": [
        { id: 1, name: "Ayaan Khan", roll: "101", status: "Absent" },
        { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
        { id: 3, name: "Karan Patel", roll: "103", status: "Present" },
        { id: 4, name: "Neha Singh", roll: "104", status: "Present" },
        { id: 5, name: "Arjun Verma", roll: "105", status: "Present" },
      ],
    },
    teacher: {
      "2025-10-23": [
        { id: 1, name: "Mr. Ahmed", subject: "Mathematics", status: "Present" },
        { id: 2, name: "Ms. Priya", subject: "Science", status: "Absent" },
        { id: 3, name: "Mr. Raj Kumar", subject: "English", status: "Present" },
        { id: 4, name: "Ms. Sarah", subject: "History", status: "Present" },
      ],
      "2025-10-22": [
        { id: 1, name: "Mr. Ahmed", subject: "Mathematics", status: "Present" },
        { id: 2, name: "Ms. Priya", subject: "Science", status: "Present" },
        { id: 3, name: "Mr. Raj Kumar", subject: "English", status: "Present" },
        { id: 4, name: "Ms. Sarah", subject: "History", status: "Absent" },
      ],
    },
  });

  const data = attendanceData[role][selectedDate] || [];

  const filteredData = data.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (role === "student"
        ? person.roll.includes(searchQuery)
        : person.subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Function to toggle attendance (present/absent)
  const toggleStatus = (id) => {
    const updated = data.map((p) =>
      p.id === id
        ? { ...p, status: p.status === "Present" ? "Absent" : "Present" }
        : p
    );
    setAttendanceData((prev) => ({
      ...prev,
      [role]: { ...prev[role], [selectedDate]: updated },
    }));
  };

  const presentCount = filteredData.filter(
    (p) => p.status === "Present"
  ).length;
  const absentCount = filteredData.filter((p) => p.status === "Absent").length;
  const attendanceRate =
    filteredData.length > 0
      ? Math.round((presentCount / filteredData.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-8  bg-gradient-to-r from-slate-900/90 to-slate-800/90 p-5 rounded-lg">
        <div className="flex items-center gap-5">
          <div className="w-fit h-fit p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
            {role === "student" ? (
              <GraduationCap className="w-8 h-8 text-white" />
            ) : (
              <Users className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold text-white">
              {role === "student" ? "Student Attendance" : "Teacher Attendance"}
            </h1>
            <p className="text-slate-400 text-sm mt-1 whitespace-nowrap">
              Manage daily attendance records
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-800 p-1.5 rounded-xl">
          <button
            onClick={() => setRole("student")}
            className={`px-5 py-2.5 rounded-lg transition-all duration-200 font-medium flex items-center gap-2 ${
              role === "student"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Students
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={`px-5 py-2.5 rounded-lg transition-all duration-200 font-medium flex items-center gap-2 ${
              role === "teacher"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Users className="w-4 h-4" />
            Teachers
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
