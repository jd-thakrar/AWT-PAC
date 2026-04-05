import { useParams, Link } from "react-router-dom";
import instructors from "../data/instructors";
import courses from "../data/courses";

function InstructorDetails() {
  const { id } = useParams();

  const instructor = instructors.find(
    (i) => i.id === parseInt(id),
  );

  if (!instructor) {
    return (
      <div className="instructor-details-page">
        <h2>Instructor Not Found ❌</h2>
        <Link to="/instructors">Back to Instructors</Link>
      </div>
    );
  }

  const instructorCourses = courses.filter(
    (c) => c.instructorId === instructor.id,
  );

  return (
    <div className="instructor-details-page">
      <h2>{instructor.name}</h2>

      <p><strong>Expertise:</strong> {instructor.expertise}</p>
      <p><strong>Experience:</strong> {instructor.experience}</p>

      <p>
        <strong>About the Instructor:</strong> {instructor.description}
      </p>

      <hr />

      <h3>Courses by {instructor.name}:</h3>

      {instructorCourses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        instructorCourses.map((course) => (
          <p key={course.id}>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
          </p>
        ))
      )}
    </div>
  );
}

export default InstructorDetails;
