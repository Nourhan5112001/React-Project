import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { userRegister } from '../Services/auth';
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await userRegister(email, password);
      toast.success("Registered successfully!");
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "#fff"
    }}>
      <Toaster position="top-center" reverseOrder={false} />
      <Form 
        className="shadow-lg p-5 rounded"
        style={{ width: "100%", maxWidth: "450px", backgroundColor: "#1e1e2f" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-warning mb-4">📝 Register</h2>

        {/* Username */}
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("username", { required: "Username is required" })}
            type="text"
            placeholder="Enter username"
            className="bg-dark text-light border-secondary"
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Enter email"
            className="bg-dark text-light border-secondary"
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={hide ? "password" : "text"}
            placeholder="Enter password"
            className="bg-dark text-light border-secondary"
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Toggle Password */}
        <Button
          variant="outline-light"
          className="w-100 mb-3"
          onClick={() => setHide(!hide)}
        >
          {hide ? "Show Password" : "Hide Password"}
        </Button>

        {/* Submit */}
        <Button type="submit" variant="warning" className="w-100 fw-bold">
          Register
        </Button>

        <div className="text-center mt-4">
          <small className="text-light">
            Already have an account? <a href="/login" className="text-info">Login here</a>
          </small>
        </div>
      </Form>
    </div>
  );
}
