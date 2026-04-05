import { Link } from "react-router-dom";
import instructors from "../data/instructors";

function Instructor() {
  return (
    <div className="instructors-page">
      <h2>Meet Our Instructors</h2>

      {instructors.map((i) => (
        <div key={i.id} className="instructor-card">
          <Link to={`/instructor/${i.id}`}>
            <h3>{i.name}</h3>
          </Link>
          <p><strong>Expertise:</strong> {i.expertise}</p>
          <p><strong>Experience:</strong> {i.experience}</p>
        </div>
      ))}
    </div>
  );
}

export default Instructor;
