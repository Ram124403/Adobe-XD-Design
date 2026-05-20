import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-header">
          <h1 className="landing-title">Welcome to XD Task</h1>
          <p className="landing-subtitle">Professional Mobile App Interface</p>
        </div>

        <div className="landing-features">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile First</h3>
            <p>Optimized for all devices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Pixel-perfect UI implementation</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Smooth</h3>
            <p>Seamless navigation experience</p>
          </div>
        </div>

        <div className="landing-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>

        <div className="landing-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
