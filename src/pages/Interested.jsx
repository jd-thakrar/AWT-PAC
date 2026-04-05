import { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import coursesData from "../data/courses";

function Interested() {
  const { interested } = useContext(CourseContext);

  const interestedCourses = coursesData.filter((course) =>
    interested.includes(course.id),
  );

  return (
    <div className="interested-page">
      <h2>Interested Courses</h2>

      {interestedCourses.length === 0 ? (
        <p>No courses marked as interested yet.</p>
      ) : (
        interestedCourses.map((course) => (
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

export default Interested;
