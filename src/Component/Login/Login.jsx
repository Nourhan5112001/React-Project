import React, { useState, useContext } from "react";
import { logIn } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { authcontext } from '../../Context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(authcontext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleValidation = (ev) => {
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name === "email" ? "emailError" : "passwordError"]:
        name === "email"
          ? value.length === 0
            ? "Email is required"
            : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Invalid email format"
          : value.length === 0
          ? "Password is required"
          : value.length < 6
          ? "Password must be at least 6 characters"
          : !/[0-9]/.test(value)
          ? "Password must contain at least one number"
          : "",
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (errors.emailError || errors.passwordError) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    try {
      const res = await logIn(user.email, user.password);
      localStorage.setItem("token", res.user.accessToken);
      setAuth(res.user.accessToken);
      toast.success("Login successful!");
      navigate('/movies');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    }}>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="card p-5 shadow-lg border-0 rounded" style={{
        maxWidth: '400px',
        width: '100%',
        backgroundColor: '#1e1e2f',
        color: '#f1f1f1',
      }}>
        <h2 className="text-center mb-4 text-warning">🔐 Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="form-control bg-dark text-light border-secondary"
              id="email"
              placeholder="you@example.com"
              onChange={handleValidation}
            />
            <small className="text-danger">{errors.emailError}</small>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              className="form-control bg-dark text-light border-secondary"
              id="password"
              placeholder="••••••••"
              onChange={handleValidation}
            />
            <small className="text-danger">{errors.passwordError}</small>
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold mt-2">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <small className="text-muted">
            Don’t have an account? <a href="/register" className="text-info">Register</a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
