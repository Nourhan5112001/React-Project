import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Services/auth";
import { authcontext } from '../../Context/auth';

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useContext(authcontext);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logOut();
        localStorage.removeItem("token");
        setAuth(null);
        navigate('/login');
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    handleLogout();
  }, [navigate, setAuth]);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <h3>Logging out...</h3>
    </div>
  );
}
