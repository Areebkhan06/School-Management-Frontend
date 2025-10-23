"use client";
import React, { useState } from "react";

const AttendancePage = () => {
  const [role, setRole] = useState("student"); // can be "student" or "teacher"

  // Sample data — you can replace it later with backend API data
  const students = [
    { id: 1, name: "Ayaan Khan", roll: "101", status: "Present" },
    { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
    { id: 3, name: "Karan Patel", roll: "103", status: "Present" },
  ];

  const teachers = [
    { id: 1, name: "Mr. Ahmed", subject: "Math", status: "Present" },
    { id: 2, name: "Ms. Priya", subject: "Science", status: "Absent" },
  ];

  const data = role === "student" ? students : teachers;

  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-slate-700 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            {role === "student" ? "Student Attendance" : "Teacher Attendance"}
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setRole("student")}
              className={`px-4 py-2 rounded-lg transition-all ${
                role === "student"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setRole("teacher")}
              className={`px-4 py-2 rounded-lg transition-all ${
                role === "teacher"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              Teachers
            </button>
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-800/70 text-left">
              {role === "student" ? (
                <>
                  <th className="p-3">Roll No</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Status</th>
                </>
              ) : (
                <>
                  <th className="p-3">Name</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Status</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr
                key={person.id}
                className="border-b border-slate-700 hover:bg-slate-800/50"
              >
                {role === "student" ? (
                  <>
                    <td className="p-3">{person.roll}</td>
                    <td className="p-3">{person.name}</td>
                  </>
                ) : (
                  <>
                    <td className="p-3">{person.name}</td>
                    <td className="p-3">{person.subject}</td>
                  </>
                )}
                <td
                  className={`p-3 font-medium ${
                    person.status === "Present"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {person.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
