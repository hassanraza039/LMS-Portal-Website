import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={`/login/${role}`} replace state={{ from: location }} />;
  }

  if (user.role !== role) {
    return <Navigate to={`/login/${user.role}`} replace />;
  }

  return children;
}
