"use client";
import React, { useContext, useState } from "react";
import {
  Users,
  BookOpen,
  TrendingUp,
  Bell,
  MessageSquare,
  ChevronRight,
  CalendarDays,
  Gift,
  ClipboardList,
  Eye,
  Pin,
  User,
  Clock,
} from "lucide-react";
import { SchoolContext } from "@/Context/SchoolContext";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const page = () => {
  const { currency } = useContext(SchoolContext);

  const notices = [
    {
      id: 1,
      title: "Annual Sports Day Announcement",
      image:
        "https://images.unsplash.com/photo-1621998014874-a6edfb5f9bc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469",
      postedBy: "Mr. Sharma",
      role: "Principal",
      date: "Oct 17, 2025",
      views: 245,
    },
    {
      id: 2,
      title: "Mid-Term Exam Schedule Released",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      postedBy: "Mrs. Gupta",
      role: "Teacher",
      date: "Oct 15, 2025",
      views: 180,
    },
    {
      id: 3,
      title: "Science Exhibition Next Week",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      postedBy: "Mr. Khan",
      role: "Teacher",
      date: "Oct 12, 2025",
      views: 300,
    },
  ];

  const upcomingEvents = [
    { date: "Oct 20", title: "Annual Sports Day" },
    { date: "Oct 25", title: "Diwali Holiday" },
    { date: "Nov 2", title: "Science Exhibition" },
  ];

  const birthdays = [
    { name: "Ayesha Khan", role: "Student" },
    { name: "Ravi Patel", role: "Teacher" },
  ];

  const exams = [
    { subject: "Mathematics", date: "Oct 21" },
    { subject: "Physics", date: "Oct 23" },
    { subject: "Computer Science", date: "Oct 25" },
  ];

  const stats = [
    {
      label: "Total Students",
      value: "2,450",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Total Teachers",
      value: "185",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Total Earning",
      value: "4,500",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      description: "Advanced React patterns course is now live",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "System Maintenance",
      description: "Scheduled maintenance on Sunday 2-4 AM",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Achievement Unlocked",
      description: "Congratulations on reaching 100 students!",
      time: "1 day ago",
    },
  ];

  const data = [
    { name: "Boys", value: 70 },
    { name: "Girls", value: 50 },
  ];
  const COLORS = ["#3B82F6", "#EC4899"];

  const Attendance = [
    { day: "Monday", Present: 80, Absent: 20 },
    { day: "Tuesday", Present: 85, Absent: 15 },
    { day: "Wednesday", Present: 90, Absent: 10 },
    { day: "Thursday", Present: 75, Absent: 25 },
    { day: "Friday", Present: 95, Absent: 5 },
    { day: "Saturday", Present: 100, Absent: 0 },
  ];

  const wave = [
    { month: "Jan", earnings: 4000 },
    { month: "Feb", earnings: 3500 },
    { month: "Mar", earnings: 5200 },
    { month: "Apr", earnings: 4800 },
    { month: "May", earnings: 6500 },
    { month: "Jun", earnings: 3200 },
    { month: "Jul", earnings: 6800 },
    { month: "Aug", earnings: 7500 },
    { month: "Sep", earnings: 6300 },
    { month: "Oct", earnings: 7800 },
    { month: "Nov", earnings: 5500 },
    { month: "Dec", earnings: 9200 },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      {/* Hero content */}
      <div className="flex flex-col lg:flex-row w-full flex-1 gap-6 p-3 lg:p-8">
        {/* Left Section - Stats */}
        <div className="w-full lg:w-[70%] flex flex-col gap-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden"
                >
                  {/* Gradient background effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-br ${stat.color} transition-opacity duration-300`}
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-3">
                        {stat.label}
                      </p>
                      <h3 className="text-3xl lg:text-4xl font-bold">
                        {stat.value}
                      </h3>
                    </div>
                    <div
                      className={`bg-linear-to-br ${stat.color} p-3 rounded-xl`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">
                    View details <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-5 justify-between">
            {/* Pie Chart */}
            <div className="sm:w-[40%] mb-5 h-[400px] bg-slate-900 p-4 rounded-xl shadow-lg text-white">
              <h2 className="text-lg font-semibold mb-4">
                Overall Gender Distribution
              </h2>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "none",
                    }}
                    itemStyle={{ color: "#E5E7EB" }}
                  />
                  <Legend verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Bar grapgh */}
            <div className="sm:w-[60%] mb-5 h-[400px] bg-slate-900 p-4 rounded-xl shadow-lg text-white">
              <h2 className="text-lg font-semibold mb-4">Weekly Attendance</h2>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={Attendance}
                  margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#E5E7EB" />
                  <YAxis stroke="#E5E7EB" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "none",
                    }}
                    itemStyle={{ color: "#E5E7EB" }}
                  />
                  <Legend verticalAlign="top" />
                  <Bar dataKey="Present" stackId="a" fill="#10B981" />
                  <Bar dataKey="Absent" stackId="a" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Wave graph */}
          <div className="w-full h-[50vh] mb-5">
            <div className="w-full h-full bg-slate-900 p-5 rounded-lg shadow-lg">
              <h2 className="text-center text-white text-2xl font-bold mb-5">
                Monthly Earnings
              </h2>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={wave}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #555",
                      borderRadius: "4px",
                      color: "#fff",
                    }}
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Legend wrapperStyle={{ color: "#888" }} />
                  <Line
                    type="monotone"
                    dataKey="earnings"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", r: 5 }}
                    activeDot={{ r: 7 }}
                    isAnimationActive={true}
                    animationDuration={800}
                    name="Earnings ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* -------------NOTICE----------------------- */}
          <div className="h-fit bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
            <div className="">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-8 bg-linear-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-white">
                    Notice Board
                  </h2>
                </div>
                <p className="text-gray-400 ml-4">
                  Stay updated with latest announcements
                </p>
              </div>

              {/* Notices Container */}
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="group relative bg-linear-to-r from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-600/0 via-cyan-600/0 to-cyan-600/0 group-hover:from-cyan-600/5 group-hover:via-cyan-600/5 group-hover:to-cyan-600/5 rounded-lg transition-all duration-300"></div>

                    {/* Content */}
                    <div className="relative flex flex-col sm:flex-row gap-4">
                      {/* Image */}
                      <div className="shrink-0">
                        <img
                          src={notice.image}
                          alt={notice.title}
                          className="w-full sm:w-20 h-40 sm:h-20 rounded-lg object-cover border border-gray-600/50 group-hover:border-cyan-400/50 transition-colors"
                        />
                      </div>

                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                          {notice.title}
                        </h3>

                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400 flex-wrap">
                          <User size={14} className="shrink-0" />
                          <span className="flex flex-wrap gap-1">
                            <span className="text-gray-200 font-medium">
                              {notice.postedBy}
                            </span>
                            <span className="mx-1">•</span>
                            <span className="text-gray-500">{notice.role}</span>
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 text-xs text-gray-500 gap-2">
                          <div className="flex items-center gap-2">
                            <Clock size={13} />
                            <span>{notice.date}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded-md group-hover:bg-slate-700/50 transition-colors">
                            <Eye size={13} />
                            <span>{notice.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Announcements & Messages */}
        <div className="w-full min-h-[50%] lg:w-[30%] flex flex-col gap-6">
          {/* Announcements Card */}
          <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Announcements</h3>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group"
                >
                  <h4 className="font-semibold text-sm text-white group-hover:text-purple-400 transition-colors">
                    {announcement.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {announcement.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {announcement.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Messages Card */}
          <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-br from-cyan-500 to-blue-500 p-2 rounded-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Messages from Students</h3>
            </div>

            <div className="space-y-3">
              {[1, 2].map((msg) => (
                <div
                  key={msg}
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                      New message from student
                    </p>
                    <span className="bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      {msg}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              View All Messages
            </button>
          </div>

          {/* ----------------------- */}
          <div className="w-full lg:w-[25vw] bg-linear-to-b from-gray-900 to-gray-800 rounded-xl shadow-xl border border-gray-800 p-4 flex flex-col gap-6 overflow-y-auto">
            {/* Upcoming Events / Holidays */}
            <div>
              <h2 className="flex items-center gap-2 text-cyan-400 font-semibold text-lg mb-3">
                <CalendarDays size={20} /> Upcoming Events
              </h2>
              <div className="flex flex-col gap-3">
                {upcomingEvents.map((event, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-slate-800/40 hover:bg-slate-800/60 rounded-lg transition-all duration-300"
                  >
                    <div>
                      <p className="text-white font-medium">{event.title}</p>
                      <p className="text-sm text-gray-400">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Birthdays Today */}
            <div>
              <h2 className="flex items-center gap-2 text-pink-400 font-semibold text-lg mb-3">
                <Gift size={20} /> Birthdays Today
              </h2>
              {birthdays.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {birthdays.map((bday, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-slate-800/40 hover:bg-slate-800/60 rounded-lg transition-all duration-300"
                    >
                      <div>
                        <p className="text-white font-medium">{bday.name}</p>
                        <p className="text-sm text-gray-400">{bday.role}</p>
                      </div>
                      <span className="text-yellow-400 text-sm">🎉</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm italic">
                  No birthdays today.
                </p>
              )}
            </div>

            {/* Exams This Week */}
            <div>
              <h2 className="flex items-center gap-2 text-blue-400 font-semibold text-lg mb-3">
                <ClipboardList size={20} /> Exams This Week
              </h2>
              <div className="flex flex-col gap-3">
                {exams.map((exam, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-slate-800/40 hover:bg-slate-800/60 rounded-lg transition-all duration-300"
                  >
                    <div>
                      <p className="text-white font-medium">{exam.subject}</p>
                      <p className="text-sm text-gray-400">{exam.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
