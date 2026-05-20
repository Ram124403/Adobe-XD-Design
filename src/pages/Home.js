import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Pages.css";

function Home({ onLogout }) {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    onLogout();
    navigate("/");
  };

  return (
    <div className="screen">
      <div className="page-header">
        <h1>Welcome Home</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {userName && (
        <div className="user-greeting">
          <p>Hello, <span>{userName}!</span></p>
        </div>
      )}

      <div className="card">
        <h3>React UI Task</h3>
        <p>Adobe XD Design Implementation</p>
        <div className="card-badge">✨ Professional Design</div>
      </div>

      <div className="action-cards">
        <div className="mini-card">
          <div className="card-icon">👤</div>
          <h4>Profile</h4>
          <p>View your profile</p>
        </div>
        <div className="mini-card">
          <div className="card-icon">⚙️</div>
          <h4>Settings</h4>
          <p>Manage your account</p>
        </div>
      </div>

      <Link to="/profile">
        <button className="btn-full-width">Go To Profile</button>
      </Link>
    </div>
  );
}

export default Home;
