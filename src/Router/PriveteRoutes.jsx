
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const PriveteRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-opacity-50"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  // Show alert before redirecting to login page
  Swal.fire({
    icon: "warning",
    title: "Please Login",
    text: "You need to log in to view this page.",
    showConfirmButton: true,
    timer: 3000,
  });

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PriveteRoutes;
