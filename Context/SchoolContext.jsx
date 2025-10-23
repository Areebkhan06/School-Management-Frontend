"use client"
import React, { createContext, useState } from "react";

export const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [Student, setStudent] = useState(false);
  const [Teacher, setTeacher] = useState(false);

  const currency = "₹";

  return (
    <SchoolContext.Provider
      value={{ Student, setStudent, Teacher, setTeacher,currency }}
    >
      {children}
    </SchoolContext.Provider>
  );
};
