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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-3 sm:px-6 lg:px-10 py-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-r from-slate-900/90 to-slate-800/90 p-4 sm:p-6 rounded-xl border border-slate-700/50">
        {/* Title Section */}
        <div className="flex items-center gap-4 w-full">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shrink-0">
            {role === "student" ? (
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            ) : (
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white truncate">
              {role === "student" ? "Student Attendance" : "Teacher Attendance"}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Manage daily attendance records
            </p>
          </div>
        </div>

        {/* Role Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 bg-slate-800/60 p-1.5 rounded-xl w-full sm:w-auto justify-center">
          <button
            onClick={() => setRole("student")}
            className={`flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-2 ${
              role === "student"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span className="hidden sm:inline">Students</span>
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-2 ${
              role === "teacher"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Teachers</span>
          </button>
        </div>
      </div>

      {/* Attendance Stats */}
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Present */}
        <div className="flex items-center justify-between bg-gradient-to-br from-green-500/10 to-green-600/5 hover:from-green-500/30 backdrop-blur-xl rounded-xl border border-green-500/20 p-4 sm:p-5 transition duration-300">
          <div>
            <h2 className="text-green-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
              Present
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-2">0</p>
          </div>
          <div className="p-3 bg-green-500/20 rounded-lg">
            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
          </div>
        </div>

        {/* Absent */}
        <div className="flex items-center justify-between bg-gradient-to-br from-red-500/10 to-red-600/5 hover:from-red-500/30 backdrop-blur-xl rounded-xl border border-red-500/20 p-4 sm:p-5 transition duration-300">
          <div>
            <h2 className="text-red-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
              Absent
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-2">0</p>
          </div>
          <div className="p-3 bg-red-500/20 rounded-lg">
            <XCircle className="w-7 h-7 sm:w-8 sm:h-8 text-red-400" />
          </div>
        </div>

        {/* Attendance Rate */}
        <div className="flex items-center justify-between bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/30 backdrop-blur-xl rounded-xl border border-blue-500/20 p-4 sm:p-5 transition duration-300">
          <div>
            <h2 className="text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
              Attendance Rate
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-2">
              45%
            </p>
          </div>
          <div className="p-3 bg-blue-500/20 rounded-lg">
            <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
