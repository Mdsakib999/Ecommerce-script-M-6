// components/RequireAdmin.jsx
import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function RequireAdmin({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // optional loading state

  if (!user || !user.isAdmin) {
    return <Navigate to="/" replace />; // redirect non-admins
  }

  return children;
}
