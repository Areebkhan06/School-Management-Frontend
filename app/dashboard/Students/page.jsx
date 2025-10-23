"use client";
import React, { useState, useEffect } from "react";
import { User, Mail, Phone, GraduationCap, Search, X, Eye, MapPin, Calendar, BookOpen, Users, Award, Filter } from "lucide-react";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSection, setSelectedSection] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // School student data
    setStudents([
      {
        id: "STU001",
        name: "Aarav Sharma",
        rollNo: "101",
        email: "aarav.sharma@school.edu",
        phone: "+91 9876543210",
        parentPhone: "+91 9876543211",
        class: "10th",
        section: "A",
        admissionDate: "2023-04-01",
        address: "Vaishali, Ghaziabad",
        fatherName: "Rajesh Sharma",
        motherName: "Priya Sharma",
        dateOfBirth: "2009-05-15",
        bloodGroup: "O+",
        attendance: "95%"
      },
      {
        id: "STU002",
        name: "Ananya Singh",
        rollNo: "102",
        email: "ananya.singh@school.edu",
        phone: "+91 9832176543",
        parentPhone: "+91 9832176544",
        class: "10th",
        section: "A",
        admissionDate: "2023-04-01",
        address: "Indirapuram, Ghaziabad",
        fatherName: "Vikram Singh",
        motherName: "Neha Singh",
        dateOfBirth: "2009-08-22",
        bloodGroup: "A+",
        attendance: "98%"
      },
      {
        id: "STU003",
        name: "Rohan Verma",
        rollNo: "201",
        email: "rohan.verma@school.edu",
        phone: "+91 9871112233",
        parentPhone: "+91 9871112234",
        class: "9th",
        section: "B",
        admissionDate: "2022-04-05",
        address: "Raj Nagar, Ghaziabad",
        fatherName: "Amit Verma",
        motherName: "Kavita Verma",
        dateOfBirth: "2010-03-10",
        bloodGroup: "B+",
        attendance: "92%"
      },
      {
        id: "STU004",
        name: "Diya Patel",
        rollNo: "103",
        email: "diya.patel@school.edu",
        phone: "+91 9765432109",
        parentPhone: "+91 9765432110",
        class: "10th",
        section: "A",
        admissionDate: "2023-04-01",
        address: "Kaushambi, Ghaziabad",
        fatherName: "Suresh Patel",
        motherName: "Anjali Patel",
        dateOfBirth: "2009-11-30",
        bloodGroup: "AB+",
        attendance: "96%"
      },
      {
        id: "STU005",
        name: "Arjun Reddy",
        rollNo: "301",
        email: "arjun.reddy@school.edu",
        phone: "+91 9998887776",
        parentPhone: "+91 9998887777",
        class: "8th",
        section: "C",
        admissionDate: "2021-04-10",
        address: "Crossings Republik, Ghaziabad",
        fatherName: "Ravi Reddy",
        motherName: "Lakshmi Reddy",
        dateOfBirth: "2011-07-18",
        bloodGroup: "O-",
        attendance: "94%"
      },
      {
        id: "STU006",
        name: "Ishita Gupta",
        rollNo: "202",
        email: "ishita.gupta@school.edu",
        phone: "+91 9123456789",
        parentPhone: "+91 9123456790",
        class: "9th",
        section: "B",
        admissionDate: "2022-04-05",
        address: "Vasundhara, Ghaziabad",
        fatherName: "Manoj Gupta",
        motherName: "Sunita Gupta",
        dateOfBirth: "2010-01-25",
        bloodGroup: "A-",
        attendance: "97%"
      }
    ]);
  }, []);

  // Get unique classes and sections
  const classes = ["All", ...new Set(students.map(s => s.class))];
  const sections = ["All", ...new Set(students.map(s => s.section))];

  // Filter students
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.includes(searchTerm) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === "All" || student.class === selectedClass;
    const matchesSection = selectedSection === "All" || student.section === selectedSection;
    return matchesSearch && matchesClass && matchesSection;
  });

  // Stats
  const totalStudents = students.length;
  const activeStudents = filteredStudents.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header with Glass Effect */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="relative">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Students Directory
            </h1>
            <p className="text-gray-400">Manage and view all student information</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Students</p>
                <p className="text-3xl font-bold text-white">{totalStudents}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="text-cyan-400" size={28} />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 p-6 hover:border-blue-400/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Filtered Results</p>
                <p className="text-3xl font-bold text-white">{activeStudents}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Filter className="text-blue-400" size={28} />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Classes</p>
                <p className="text-3xl font-bold text-white">{classes.length - 1}</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="text-purple-400" size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search by name, roll no, or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Class Filter */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all cursor-pointer"
            >
              {classes.map(cls => (
                <option key={cls} value={cls} className="bg-slate-900">{cls === "All" ? "All Classes" : `Class ${cls}`}</option>
              ))}
            </select>

            {/* Section Filter */}
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all cursor-pointer"
            >
              {sections.map(section => (
                <option key={section} value={section} className="bg-slate-900">{section === "All" ? "All Sections" : `Section ${section}`}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Students Grid/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudents.length === 0 ? (
            <div className="col-span-full text-center py-16 rounded-xl bg-white/5 border border-white/10">
              <Users className="mx-auto text-gray-600 mb-4" size={48} />
              <p className="text-gray-400 text-lg">No students found matching your criteria</p>
            </div>
          ) : (
            filteredStudents.map((student) => (
              <div
                key={student.id}
                className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{student.name}</h3>
                        <p className="text-gray-400 text-sm">Roll: {student.rollNo}</p>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <BookOpen size={16} className="text-cyan-400" />
                      <span>Class {student.class} - Section {student.section}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Phone size={16} className="text-blue-400" />
                      <span>{student.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Award size={16} className="text-purple-400" />
                      <span>Attendance: {student.attendance}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedStudent(student)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r  bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 hover:to-blue-500/30 border border-cyan-500/30 text-cyan-400 rounded-lg transition-all font-medium group-hover:scale-105"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-b border-white/10 backdrop-blur-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedStudent.name}</h2>
                  <p className="text-gray-400">Student ID: {selectedStudent.id}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Class</p>
                  <p className="text-white text-xl font-bold">{selectedStudent.class}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Section</p>
                  <p className="text-white text-xl font-bold">{selectedStudent.section}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Roll No</p>
                  <p className="text-white text-xl font-bold">{selectedStudent.rollNo}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Attendance</p>
                  <p className="text-green-400 text-xl font-bold">{selectedStudent.attendance}</p>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User className="text-cyan-400" size={20} />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Date of Birth</p>
                    <p className="text-white">{new Date(selectedStudent.dateOfBirth).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Blood Group</p>
                    <p className="text-white font-semibold">{selectedStudent.bloodGroup}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Admission Date</p>
                    <p className="text-white">{new Date(selectedStudent.admissionDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Address</p>
                    <p className="text-white">{selectedStudent.address}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Phone className="text-blue-400" size={20} />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white">{selectedStudent.email}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white">{selectedStudent.phone}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Parent's Phone</p>
                    <p className="text-white">{selectedStudent.parentPhone}</p>
                  </div>
                </div>
              </div>

              {/* Parent Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="text-purple-400" size={20} />
                  Parent Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Father's Name</p>
                    <p className="text-white">{selectedStudent.fatherName}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Mother's Name</p>
                    <p className="text-white">{selectedStudent.motherName}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 p-6">
              <button
                onClick={() => setSelectedStudent(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;