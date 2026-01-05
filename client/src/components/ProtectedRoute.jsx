import { Navigate } from "react-router";
import { useAuth } from "../AuthContext";
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
}
