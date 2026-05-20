import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Pages.css";

function Profile({ onLogout }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    if (name) setUserName(name);
    if (email) setUserEmail(email);
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
        <h1>Profile</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="profile-img"
        />

        <h2>{userName || "Ramakrishna"}</h2>
        <p className="profile-title">Frontend Developer</p>
        <p className="profile-email">{userEmail}</p>

        <div className="profile-stats">
          <div className="stat">
            <div className="stat-number">12</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Rating</div>
          </div>
          <div className="stat">
            <div className="stat-number">95%</div>
            <div className="stat-label">Success</div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-action">Edit Profile</button>
          <button className="btn-action secondary">Share Profile</button>
        </div>
      </div>

      <Link to="/home">
        <button className="btn-full-width">Back To Home</button>
      </Link>
    </div>
  );
}

export default Profile;
