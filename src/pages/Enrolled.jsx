import { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import coursesData from "../data/courses";

function Enrolled() {
  const { enrolled } = useContext(CourseContext);

  const enrolledCourses = coursesData.filter((course) =>
    enrolled.includes(course.id),
  );

  return (
    <div className="enrolled-page">
      <h2>Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        enrolledCourses.map((course) => (
          <div key={course.id} className="course-card">
            <Link to={`/course/${course.id}`}>
              <h3>{course.title}</h3>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Enrolled;
