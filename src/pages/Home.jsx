import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Online Course Portal</h1>
      <p>Discover expert-led courses and professional instructors.</p>
      
      <div className="home-actions">
        <Link to="/courses">
          <button>Explore Courses</button>
        </Link>
        <Link to="/instructors">
          <button style={{ backgroundColor: "#64748b" }}>Meet Instructors</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
