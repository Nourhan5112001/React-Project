import React, { useContext } from "react";
import { authcontext } from "../../Context/auth";
import { Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";
function Producted({ children }) {
  const { isAuth } = useContext(authcontext);
  return (
    <>
      {isAuth ? children : <Navigate to="/login" />}
    </>
  );
}
export default Producted;