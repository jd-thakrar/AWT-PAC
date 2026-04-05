import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses";
import instructors from "../data/instructors";
import { CourseContext } from "../context/CourseContext";

function Courses() {
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [sort, setSort] = useState("");

  const { interested, setInterested, enrolled, setEnrolled } =
    useContext(CourseContext);

  const markInterested = (id) => {
    if (!interested.includes(id)) {
      setInterested([...interested, id]);
    }
  };

  const markEnrolled = (id) => {
    if (!enrolled.includes(id)) {
      setEnrolled([...enrolled, id]);
      setInterested(interested.filter((i) => i !== id));
    }
  };

  const filteredCourses = coursesData
    .filter(
      (course) =>
        (category === "" || course.category === category) &&
        (level === "" || course.level === level),
    )
    .sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="courses-page">
      <h2>Available Courses</h2>

      <div className="course-filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Web">Web</option>
          <option value="Backend">Backend</option>
        </select>

        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="title">Title (A-Z)</option>
        </select>
      </div>

      <div className="courses-list">
        {filteredCourses.length === 0 ? (
          <p>No courses found ❌</p>
        ) : (
          filteredCourses.map((course) => {
            const instructor = instructors.find(
              (i) => i.id === course.instructorId,
            );

            return (
              <div key={course.id} className="course-card">
                <Link to={`/course/${course.id}`}>
                  <h3>{course.title}</h3>
                </Link>
                <p><strong>Category:</strong> {course.category}</p>
                <p><strong>Level:</strong> {course.level}</p>
                <p>
                  <strong>Instructor:</strong>{" "}
                  <Link to={`/instructor/${course.instructorId}`}>
                    {instructor ? instructor.name : "Unknown"}
                  </Link>
                </p>

                <button onClick={() => markInterested(course.id)}>
                  {interested.includes(course.id) ? "Interested ✔️" : "Interested"}
                </button>

                <button onClick={() => markEnrolled(course.id)}>
                  {enrolled.includes(course.id) ? "Enrolled ✔️" : "Enroll"}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Courses;
