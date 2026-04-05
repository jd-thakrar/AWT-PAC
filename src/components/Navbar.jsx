import { Link } from "react-router-dom";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function Navbar() {
  const { interested, enrolled } = useContext(CourseContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Course Hub</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/instructors">Instructors</Link>
        <Link to="/interested">Interested ({interested.length})</Link>
        <Link to="/enrolled">Enrolled ({enrolled.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
