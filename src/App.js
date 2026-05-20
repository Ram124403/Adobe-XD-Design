import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  // Check authentication status from localStorage - call this to get real-time value
  const checkAuth = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };

  useEffect(() => {
    setLoading(false);

    // Listen for storage changes (handles login/logout from same tab)
    const handleStorageChange = () => {
      // Listener for storage changes - storage state is checked directly via checkAuth()
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Use direct localStorage check for route guards to ensure immediate updates
  const isAuth = checkAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/login"
          element={
            isAuth ? (
              <Navigate to="/home" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuth ? (
              <Navigate to="/home" />
            ) : (
              <Signup />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuth ? (
              <div className="mobile-container">
                <Home onLogout={handleLogout} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            isAuth ? (
              <div className="mobile-container">
                <Profile onLogout={handleLogout} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
