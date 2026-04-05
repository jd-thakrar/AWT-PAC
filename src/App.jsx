import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Instructor from "./pages/Instructor";
import InstructorDetails from "./pages/InstructorDetails"; 
import Interested from "./pages/Interested";
import Enrolled from "./pages/Enrolled";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        
        {/* Course Details */}
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* Instructor Pages */}
        <Route path="/instructors" element={<Instructor />} />
        <Route path="/instructor/:id" element={<InstructorDetails />} />  {/* 👈 FIX */}

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found ❌</h1>} />

<Route path="/interested" element={<Interested />} />
<Route path="/enrolled" element={<Enrolled />} />
      </Routes>
    </>
  );
}

export default App;