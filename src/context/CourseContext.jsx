import { createContext, useState } from "react";

export const CourseContext = createContext();

function CourseProvider({ children }) {
  const [interested, setInterested] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  return (
    <CourseContext.Provider
      value={{
        interested,
        setInterested,
        enrolled,
        setEnrolled,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider;