"use client"
import React, { useState } from 'react';
import { Search, Plus, Mail, Phone, BookOpen, TrendingUp, BarChart3, Zap, ArrowUpRight, MessageSquare, Star } from 'lucide-react';

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const teachers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@school.edu",
      phone: "+1-555-0101",
      department: "Mathematics",
      experience: "8 years",
      students: 120,
      attendance: 98,
      rating: 4.8,
      qualification: "M.Sc Mathematics",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      status: "Active"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@school.edu",
      phone: "+1-555-0102",
      department: "Science",
      experience: "6 years",
      students: 135,
      attendance: 96,
      rating: 4.6,
      qualification: "Ph.D Physics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      status: "Active"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@school.edu",
      phone: "+1-555-0103",
      department: "English",
      experience: "5 years",
      students: 110,
      attendance: 99,
      rating: 4.9,
      qualification: "M.A English Literature",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      status: "Active"
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@school.edu",
      phone: "+1-555-0104",
      department: "History",
      experience: "12 years",
      students: 125,
      attendance: 97,
      rating: 4.7,
      qualification: "M.A History",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      status: "Active"
    }
  ];

  const departments = ['All', 'Mathematics', 'Science', 'English', 'History'];
  
  const filtered = teachers.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       t.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept = selectedDept === 'All' || t.department === selectedDept;
    return matchSearch && matchDept;
  });

  const stats = [
    { 
      label: 'Total Teachers', 
      value: teachers.length, 
      icon: BookOpen, 
      gradient: 'from-cyan-600/40 to-cyan-600/10',
      accent: 'cyan',
      change: '+2 this month'
    },
    { 
      label: 'Avg Rating', 
      value: '4.75★', 
      icon: Star, 
      gradient: 'from-amber-600/40 to-amber-600/10',
      accent: 'amber',
      change: '+0.2 this month'
    },
    { 
      label: 'Avg Attendance', 
      value: '97.5%', 
      icon: BarChart3, 
      gradient: 'from-emerald-600/40 to-emerald-600/10',
      accent: 'emerald',
      change: '+1.5% this month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-10 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 rounded-full"></div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Teachers
                </h1>
              </div>
              <p className="text-gray-400 text-lg">Manage teacher profiles, performance & attendance</p>
            </div>
            <button className="group relative bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-xl hover:shadow-cyan-500/50 w-full sm:w-auto justify-center">
              <Plus size={22} className="group-hover:scale-110 transition-transform" />
              <span>Add Teacher</span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-600/20 to-transparent blur-xl"></div>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/70 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-medium mb-2">{stat.label}</p>
                      <p className="text-4xl font-bold text-white mb-3">{stat.value}</p>
                      <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
                        <ArrowUpRight size={16} />
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl bg-${stat.accent}-600/20 group-hover:bg-${stat.accent}-600/30 transition-all`}>
                      <Icon className={`w-8 h-8 text-${stat.accent}-400`} />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tl from-gray-700/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-10 space-y-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-lg"></div>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search teachers by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900/50 backdrop-blur-sm border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Department Filter */}
          <div className="flex gap-2 flex-wrap p-4 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedDept === dept
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-gray-700/50 hover:border-gray-600'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(teacher => (
            <div
              key={teacher.id}
              className="group relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-800/30 backdrop-blur-xl border border-gray-700/40 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >

              <div className="relative p-6">
                {/* Status Badge */}
                {/* <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 bg-emerald-600/20 border border-emerald-500/50 rounded-full">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-xs font-medium text-emerald-300">{teacher.status}</span>
                    </div>
                  </div>
                </div> */}

                {/* Profile Section */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-20 h-20 rounded-xl object-cover border-2 border-gray-600/50 group-hover:border-cyan-400/50 transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{teacher.name}</h3>
                    <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">{teacher.department}</p>
                    <p className="text-xs text-gray-400">{teacher.qualification}</p>
                  </div>
                </div>

                

                {/* Contact Info */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer">
                    <Mail size={16} className="text-cyan-400/60 flex-shrink-0" />
                    <span className="truncate">{teacher.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer">
                    <Phone size={16} className="text-cyan-400/60 flex-shrink-0" />
                    <span>{teacher.phone}</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/20 rounded-xl border border-gray-700/30">
                  <div className="text-center group/stat">
                    <p className="text-xs text-gray-500 mb-1.5 font-medium">EXPERIENCE</p>
                    <p className="text-lg font-bold text-white group-hover/stat:text-cyan-300 transition-colors">{teacher.experience}</p>
                  </div>
                  <div className="text-center group/stat">
                    <p className="text-xs text-gray-500 mb-1.5 font-medium">STUDENTS</p>
                    <p className="text-lg font-bold text-white group-hover/stat:text-emerald-300 transition-colors">{teacher.students}</p>
                  </div>
                  <div className="text-center group/stat">
                    <p className="text-xs text-gray-500 mb-1.5 font-medium">ATTENDANCE</p>
                    <p className="text-lg font-bold text-white group-hover/stat:text-amber-300 transition-colors">{teacher.attendance}%</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2.5 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 rounded-lg font-semibold transition-all border border-cyan-500/30 hover:border-cyan-500/60 flex items-center justify-center gap-2 group/btn">
                    <MessageSquare size={16} />
                    <span>View Details</span>
                  </button>
                  {/* <button className="flex-1 px-4 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 rounded-lg font-semibold transition-all border border-gray-600/30 hover:border-gray-500/50">
                    <Zap size={16} className="mx-auto" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <BookOpen size={56} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg font-medium">No teachers found</p>
            <p className="text-gray-500 text-sm mt-1">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}