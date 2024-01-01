import { Navigate } from "react-router-dom";

// For protected routes
export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("admin"));
  return getTokenFromLocalStorage?.token !== undefined ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};
