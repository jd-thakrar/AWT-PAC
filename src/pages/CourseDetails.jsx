import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";
import instructors from "../data/instructors";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-details">
        <h2>Course Not Found ❌</h2>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  const instructor = instructors.find(
    (i) => i.id === course.instructorId,
  );

  const recommendedCourses = courses.filter(
    (c) =>
      (c.category === course.category ||
        c.level === course.level) &&
      c.id !== course.id,
  );

  return (
    <div className="course-details">
      <h2>{course.title}</h2>

      <p><strong>Category:</strong> {course.category}</p>
      <p><strong>Level:</strong> {course.level}</p>

      <p><strong>Description:</strong> {course.description}</p>

      <p>
        <strong>Instructor:</strong>{" "}
        <Link to={`/instructor/${course.instructorId}`}>
          {instructor ? instructor.name : "Unknown"}
        </Link>
      </p>

      <hr />

      <h3>Recommended Courses:</h3>

      {recommendedCourses.length === 0 ? (
        <p>No recommendations available</p>
      ) : (
        recommendedCourses.map((c) => (
          <p key={c.id}>
            <Link to={`/course/${c.id}`}>{c.title}</Link>
          </p>
        ))
      )}
    </div>
  );
}

export default CourseDetails;
